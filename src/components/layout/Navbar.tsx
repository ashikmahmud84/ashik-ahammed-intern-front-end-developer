
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Terms', href: '#terms' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-surface">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-extrabold tracking-[0.2em] text-heading"
        >
          THETINY.SITE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors hover:text-primary ${
                link.label === 'Home'
                  ? 'font-semibold text-primary'
                  : 'text-body'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-body transition hover:border-primary hover:text-primary">
            Log In
          </button>

          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-body hover:bg-secondary md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-surface px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-body hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
              <button className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-body">
                Log In
              </button>

              <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
