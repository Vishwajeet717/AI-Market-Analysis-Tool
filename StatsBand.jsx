const STATS = [
  { value: '1,200+', label: 'Companies analyzed' },
  { value: '84%', label: 'Average confidence score' },
  { value: '24/7', label: 'Autonomous research' },
  { value: '3', label: 'Decision tiers' },
]

function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBand
