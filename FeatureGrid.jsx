const SERVICES = [
  {
    title: 'Business Research',
    description:
      "We profile a company's core business model, market position, and competitive moat before forming any opinion.",
  },
  {
    title: 'Risk Analysis',
    description:
      'Every strength is checked against a matching risk — valuation, competition, execution, and macro exposure are all weighed.',
  },
  {
    title: 'AI Reasoning',
    description:
      'Signals are combined into a single line of reasoning, so you see exactly why the agent reached its conclusion.',
  },
  {
    title: 'Invest / Pass Decisions',
    description:
      'We close with a clear call — Invest, Watchlist, or Pass — backed by a confidence score you can sanity-check.',
  },
]

function FeatureGrid() {
  return (
    <section className="feature-grid-section">
      <p className="section-eyebrow">// Our Services</p>
      <h2 className="section-title">What InvestIQ delivers</h2>

      <div className="feature-grid">
        {SERVICES.map((service) => (
          <article key={service.title} className="feature-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
