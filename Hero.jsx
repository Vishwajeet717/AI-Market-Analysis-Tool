function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const BADGES = ['Company Research', 'Risk Analysis', 'Financial Signals', 'Invest / Pass Decision']

function Hero() {
  return (
    <section className="hero-panel" id="hero">
      <p className="section-eyebrow">// AI Investment Research Agent</p>

      <h1 className="hero-title">Ask about any company. Get an analyst's verdict.</h1>

      <p className="hero-subtitle">
        InvestIQ reads the business, weighs the risks, and hands back a confidence-scored
        Invest, Watchlist, or Pass call — reasoning included, not just a guess.
      </p>

      <ul className="hero-badges">
        {BADGES.map((badge) => (
          <li key={badge} className="hero-badge">
            {badge}
          </li>
        ))}
      </ul>

      <div className="hero-cta-row">
        <button type="button" className="hero-cta-button" onClick={() => scrollToId('how-it-works')}>
          Get Started
        </button>
        <button type="button" className="hero-skip-link" onClick={() => scrollToId('search-panel')}>
          Skip straight to the demo →
        </button>
      </div>
    </section>
  )
}

export default Hero
