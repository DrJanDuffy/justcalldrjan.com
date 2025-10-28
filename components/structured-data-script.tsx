'use client'

import { useEffect } from 'react'

interface StructuredDataScriptProps {
  data: object
  id?: string
}

export default function StructuredDataScript({ data, id = 'structured-data' }: StructuredDataScriptProps) {
  useEffect(() => {
    // Remove existing script if present
    const existing = document.getElementById(id)
    if (existing) {
      existing.remove()
    }

    // Create and inject new script
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(id)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data, id])

  return null
}

