import { EXAMPLE_RUNS } from '../data/dummyData'

const DECISION_STYLES = {
  INVEST: 'example-decision-invest',
  WATCHLIST: 'example-decision-watchlist',
  PASS: 'example-decision-pass',
}

function ExampleRuns() {
  return (
    <section className="example-runs" id="example-runs">
      <h2 className="example-runs-title">Example Runs</h2>
      <p className="example-runs-subtitle">
        A look at how the agent reasons about a few well-known companies.
      </p>

      <div className="example-grid">
        {EXAMPLE_RUNS.map((run) => (
          <article key={run.company} className="example-card">
            <div className="example-card-header">
              <h3>{run.company}</h3>
              <span className={`example-decision ${DECISION_STYLES[run.decision]}`}>{run.decision}</span>
            </div>
            <p className="example-score">{run.overallScore}/100</p>
            <p className="example-tagline">{run.tagline}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExampleRuns
