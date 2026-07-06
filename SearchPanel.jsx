import { useState } from 'react'
import { generateReport } from '../data/dummyData'

const ANALYZE_DELAY_MS = 1000

// onReportReady(report) is called with the dummy report once "analysis" finishes,
// or with null when the input is cleared/invalid so App.jsx can hide the ResultCard.
function SearchPanel({ onReportReady }) {
  const [companyName, setCompanyName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleAnalyze = () => {
    const trimmedName = companyName.trim()

    if (!trimmedName) {
      setErrorMessage('Please enter a company name.')
      onReportReady(null)
      return
    }

    setErrorMessage('')
    setIsLoading(true)
    onReportReady(null)

    // Simulated request. Replace this timeout with a real API call later.
    setTimeout(() => {
      const report = generateReport(trimmedName)
      setIsLoading(false)
      onReportReady(report)
    }, ANALYZE_DELAY_MS)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAnalyze()
    }
  }

  return (
    <section className="search-panel">
      <label className="search-label" htmlFor="company-input">
        Company name
      </label>

      <div className="search-row">
        <input
          id="company-input"
          type="text"
          className="search-input"
          placeholder="Enter company name, e.g. Apple, Nvidia, Tesla"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />

        <button type="button" className="search-button" onClick={handleAnalyze} disabled={isLoading}>
          {isLoading ? 'Analyzing…' : 'Analyze Investment'}
        </button>
      </div>

      {isLoading && (
        <p className="search-status search-status-loading" role="status">
          Running research agent on {companyName.trim()}…
        </p>
      )}

      {!isLoading && errorMessage && (
        <p className="search-status search-status-error" role="alert">
          {errorMessage}
        </p>
      )}
    </section>
  )
}

export default SearchPanel
