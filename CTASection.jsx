function scrollToSearch() {
  const el = document.getElementById('search-panel')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function CTASection() {
  return (
    <section className="cta-section">
      <p className="section-eyebrow">// Ready when you are</p>
      <h2>Put a company through the agent</h2>
      <p>Jump back to the search bar and analyze one of your own.</p>
      <button type="button" className="cta-button" onClick={scrollToSearch}>
        Analyze a Company
      </button>
    </section>
  )
}

export default CTASection
