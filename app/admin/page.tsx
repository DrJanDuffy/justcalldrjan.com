'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PromptComponent from '../components/prompt-component'
import ApiKeyError from '../components/api-key-error'
import RateLimitDialog from '../components/rate-limit-dialog'
import ErrorDialog from '../components/error-dialog'
import { useApiValidation } from '@/lib/hooks/useApiValidation'

export default function AdminPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [projects, setProjects] = useState<any[]>([])
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState('new')
  const [selectedChatId, setSelectedChatId] = useState('new')
  const [projectChats, setProjectChats] = useState<any[]>([])
  const [showRateLimitDialog, setShowRateLimitDialog] = useState(false)
  const [rateLimitInfo, setRateLimitInfo] = useState<{
    resetTime?: string
    remaining?: number
  }>({})
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // API validation on page load
  const { isValidating, showApiKeyError } = useApiValidation()

  // Load projects on page mount (only if API is valid)
  useEffect(() => {
    if (!isValidating && !showApiKeyError) {
      loadProjectsWithCache()
    }
  }, [isValidating, showApiKeyError])

  const loadProjectsWithCache = async () => {
    // First, try to load from sessionStorage for immediate display
    try {
      const cachedProjects = sessionStorage.getItem('projects')
      if (cachedProjects) {
        const parsedProjects = JSON.parse(cachedProjects)
        setProjects(parsedProjects)
        setProjectsLoaded(true)
      }
    } catch (err) {
      // Silently handle cache loading errors
    }

    // Then fetch fresh data in the background
    loadProjects()
  }

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      if (response.ok) {
        const data = await response.json()
        const projectsData = data.data || data || []
        setProjects(projectsData)
        setProjectsLoaded(true)

        // Store in sessionStorage for next time
        try {
          sessionStorage.setItem('projects', JSON.stringify(projectsData))
        } catch (err) {
          // Silently handle cache storage errors
        }
      } else if (response.status === 401) {
        const errorData = await response.json()
        if (errorData.error === 'API_KEY_MISSING') {
          // API key error is now handled by useApiValidation hook
          return
        }
      }
    } catch (err) {
      // Silently handle project loading errors
    } finally {
      // Mark as loaded even if there was an error
      setProjectsLoaded(true)
    }
  }

  const loadProjectChatsWithCache = async (projectId: string) => {
    // First, try to load from sessionStorage for immediate display
    try {
      const cachedChats = sessionStorage.getItem(`project-chats-${projectId}`)
      if (cachedChats) {
        const parsedChats = JSON.parse(cachedChats)
        setProjectChats(parsedChats)
      }
    } catch (err) {
      // Silently handle cache loading errors
    }

    // Then fetch fresh data in the background
    try {
      const response = await fetch(`/api/projects/${projectId}`)
      if (response.ok) {
        const data = await response.json()
        const chatsData = data.chats || []
        setProjectChats(chatsData)

        // Store in sessionStorage for next time
        try {
          sessionStorage.setItem(
            `project-chats-${projectId}`,
            JSON.stringify(chatsData),
          )
        } catch (err) {
          // Silently handle cache storage errors
        }
      }
    } catch (err) {
      // Silently handle project chats loading errors
    }
  }

  const handleProjectChange = async (newProjectId: string) => {
    if (newProjectId === 'new') {
      // Stay on homepage for new project
      setSelectedProjectId('new')
      setSelectedChatId('new')
      setProjectChats([])
    } else {
      // Redirect to the selected project page
      router.push(`/admin/projects/${newProjectId}`)
    }
  }

  const handleChatChange = (newChatId: string) => {
    setSelectedChatId(newChatId)
  }

  const handleSubmit = async (
    prompt: string,
    settings: { modelId: string; imageGenerations: boolean; thinking: boolean },
    attachments?: { url: string; name?: string; type?: string }[],
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          modelId: settings.modelId,
          imageGenerations: settings.imageGenerations,
          thinking: settings.thinking,
          ...(attachments && attachments.length > 0 && { attachments }),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()

        // Check for API key error
        if (response.status === 401 && errorData.error === 'API_KEY_MISSING') {
          // API key error is now handled by useApiValidation hook
          return
        }

        // Check for rate limit error
        if (
          response.status === 429 &&
          errorData.error === 'RATE_LIMIT_EXCEEDED'
        ) {
          setRateLimitInfo({
            resetTime: errorData.resetTime,
            remaining: errorData.remaining,
          })
          setShowRateLimitDialog(true)
          return
        }

        setErrorMessage(errorData.error || 'Failed to generate app')
        setShowErrorDialog(true)
        return
      }

      const data = await response.json()

      // Redirect to the new chat
      if (data.id || data.chatId) {
        const newChatId = data.id || data.chatId
        const projectId = data.projectId || 'default' // Fallback project
        router.push(`/admin/projects/${projectId}/chats/${newChatId}`)
        return
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Failed to generate app. Please try again.',
      )
      setShowErrorDialog(true)
    } finally {
      setIsLoading(false)
    }
  }

  // Show API key error page if needed
  if (showApiKeyError) {
    return <ApiKeyError />
  }

  return (
    <div className="relative min-h-dvh bg-background">
      {/* Admin Header */}
      <div className="border-b border-border bg-muted/40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-lg font-semibold">v0 Admin Tool</h2>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Website
          </a>
        </div>
      </div>

      <PromptComponent
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Describe what you'd like to build..."
        showDropdowns={projectsLoaded}
        projects={projects}
        projectChats={projectChats}
        currentProjectId={selectedProjectId}
        currentChatId={selectedChatId}
        onProjectChange={handleProjectChange}
        onChatChange={handleChatChange}
      />

      <RateLimitDialog
        isOpen={showRateLimitDialog}
        onClose={() => setShowRateLimitDialog(false)}
        resetTime={rateLimitInfo.resetTime}
        remaining={rateLimitInfo.remaining}
      />

      <ErrorDialog
        isOpen={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
        message={errorMessage}
      />
    </div>
  )
}

