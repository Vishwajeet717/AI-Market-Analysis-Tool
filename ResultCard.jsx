const DECISION_STYLES = {
  INVEST: 'result-decision-invest',
  WATCHLIST: 'result-decision-watchlist',
  PASS: 'result-decision-pass',
}

// Small circular progress ring used for confidence and overall score.
function ScoreRing({ label, value }) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)

  return (
    <div className="score-ring">
      <svg viewBox="0 0 80 80" className="score-ring-svg" role="img" aria-label={`${label}: ${value} out of 100`}>
        <circle cx="40" cy="40" r={radius} className="score-ring-track" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          className="score-ring-value"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="score-ring-text">
        <span className="score-ring-number">{value}</span>
        <span className="score-ring-label">{label}</span>
      </div>
    </div>
  )
}

function ResultCard({ report }) {
  if (!report) {
    return null
  }

  const decisionClass = DECISION_STYLES[report.decision] ?? 'result-decision-watchlist'

  return (
    <section className="result-card">
      <header className="result-header">
        <div>
          <p className="result-eyebrow">Research Report</p>
          <h2 className="result-company">{report.company}</h2>
        </div>
        <span className={`result-decision ${decisionClass}`}>{report.decision}</span>
      </header>

      <div className="result-scores">
        <ScoreRing label="Confidence" value={report.confidence} />
        <ScoreRing label="Overall Score" value={report.overallScore} />
      </div>

      <div className="result-section">
        <h3>Business Summary</h3>
        <p>{report.businessSummary}</p>
      </div>

      <div className="result-section">
        <h3>Financial Health</h3>
        <p>{report.financialHealth}</p>
      </div>

      <div className="result-columns">
        <div className="result-column">
          <h3>Positive Signals</h3>
          <ul className="result-list result-list-positive">
            {report.positives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="result-column">
          <h3>Risk Factors</h3>
          <ul className="result-list result-list-risk">
            {report.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="result-section">
        <h3>Recent News Summary</h3>
        <p>{report.recentNews}</p>
      </div>

      <div className="result-section">
        <h3>Final Reasoning</h3>
        <p>{report.finalReasoning}</p>
      </div>

      <p className="result-disclaimer">{report.disclaimer}</p>
    </section>
  )
}

export default ResultCard
