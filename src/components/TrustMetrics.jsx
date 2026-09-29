const METRICS = [
  { value: '500+', label: 'nxënës të regjistruar' },
  { value: '95%', label: 'prindër që rekomandojnë shkollën' },
  { value: '80+', label: 'projekte reale të ndërtuara' },
  { value: '3', label: 'nivele mësimi sipas moshës' },
]

function TrustMetrics() {
  return (
    <section className="metrics">
      <div className="container metrics-grid">
        {METRICS.map((metric) => (
          <div key={metric.label} className="metric">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustMetrics
