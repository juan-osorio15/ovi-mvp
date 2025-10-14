import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Link href="/" className="text-black hover:text-primary transition-colors">
            OVI
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/directory" className="text-black hover:text-primary transition-colors">
            Directorio
          </Link>
        </div>
      </div>
    </nav>
  )
}
