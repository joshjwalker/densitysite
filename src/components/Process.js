import React from "react"

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="section-label">Our Process</div>
        <h2>Diagnosis. Build. Transform.</h2>
        <div className="process-grid">
          <div className="process-card">
            <div className="process-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3>Diagnose Bottlenecks</h3>
            <p>
              We map your development lifecycle. Pipelines, team
              structure, tooling, and gap analysis.
            </p>
          </div>
          <div className="process-card">
            <div className="process-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Build Solutions</h3>
            <p>
              Custom infrastructure. Not off-the-shelf. Proprietary
              systems built for your specific bottlenecks.
            </p>
          </div>
          <div className="process-card">
            <div className="process-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Measure Velocity</h3>
            <p>
              Track measurable gains across sprints. Bottlenecks.
              Days saved. Feature velocity changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
