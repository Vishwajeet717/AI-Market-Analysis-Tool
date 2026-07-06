import { useState } from 'react'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (id) => {
    scrollToId(id)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-logo">InvestIQ</span>
          <span className="navbar-tagline">AI Research Agent</span>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <button type="button" className="navbar-link" onClick={() => handleLinkClick('how-it-works')}>
            How It Works
          </button>
          <button type="button" className="navbar-link" onClick={() => handleLinkClick('example-runs')}>
            Example Runs
          </button>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
