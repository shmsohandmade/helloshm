import "../styles/ImpactSection.css"

function ImpactSection() {
  return (

    <section className="impact-section">

      <div className="impact-header">

        <p className="impact-label">
          Circular Impact
        </p>

        <h2>
          Small everyday actions, meaningful long-term change.
        </h2>

        <p className="impact-description">
          Through workshops, plastic-free products, and circular soap making practices,
          sohandmade.co explores gentler ways of living and creating.
        </p>

      </div>

      <div className="impact-grid">

        <div className="impact-card">

          <h3>120kg</h3>

          <p>
            Used cooking oil transformed into soap
          </p>

        </div>

        <div className="impact-card">

          <h3>3,800+</h3>

          <p>
            Plastic-free soap bars shared
          </p>

        </div>

        <div className="impact-card">

          <h3>19kg</h3>

          <p>
            Estimated plastic packaging avoided
          </p>

        </div>

      </div>

      <span className="impact-note">
        Based on internal tracking and estimated 5g plastic packaging per soap bar.
      </span>

    </section>

  )
}

export default ImpactSection