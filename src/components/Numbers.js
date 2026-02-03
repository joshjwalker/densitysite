import React from "react"

const Numbers = () => {
  return (
    <section className="numbers" id="results">
      <div className="container">
        <div className="section-label">The Difference</div>
        <h2>This isn't hype. It's numbers.</h2>
        <div className="numbers-comparison">
          <div className="comparison-card">
            <div className="comparison-card-label">Before Density</div>
            <ul>
              <li>3-week feature cycles</li>
              <li>6-month roadmaps that slip</li>
              <li>Velocity as a limiting factor</li>
            </ul>
          </div>
          <div className="comparison-card accent">
            <div className="comparison-card-label accent">After Density</div>
            <ul>
              <li>Same features. Days instead of weeks.</li>
              <li>Roadmaps become checklists</li>
              <li>Development velocity as competitive advantage</li>
            </ul>
          </div>
        </div>
        <div className="numbers-stats">
          <div className="stat-item">
            <div className="stat-number">15x</div>
            <div className="stat-label">Average velocity increase</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2.3</div>
            <div className="stat-label">Weeks to days (average)</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Engagements with measurable results</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers
