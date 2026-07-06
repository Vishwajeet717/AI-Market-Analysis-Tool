const STEPS = [
  {
    number: '01',
    title: 'Enter a company',
    description: 'Type any public company name into the search bar below.',
  },
  {
    number: '02',
    title: 'Agent gathers signals',
    description: 'Business model, financial health, and recent news are pulled together into one view.',
  },
  {
    number: '03',
    title: 'Risk gets weighed',
    description: 'Positive signals are checked against risk factors to build a confidence score.',
  },
  {
    number: '04',
    title: 'Get a decision',
    description: 'Receive an Invest, Watchlist, or Pass call, with the full reasoning behind it.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <p className="section-eyebrow">// How it works</p>
      <h2 className="section-title">From company name to decision</h2>

      <ol className="steps-grid">
        {STEPS.map((step) => (
          <li key={step.number} className="step-card">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowItWorks
