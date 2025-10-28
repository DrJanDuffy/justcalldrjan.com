import Link from 'next/link'

export default function AuthorBadge() {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-gray-200 mb-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">JD</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600">
          By <Link href="/about" className="font-semibold text-blue-600 hover:text-blue-700">Dr. Janet Duffy</Link>
        </p>
        <p className="text-xs text-gray-500">
          Las Vegas Real Estate Expert | Specializing in Homes That Didn't Sell
        </p>
      </div>
    </div>
  )
}

