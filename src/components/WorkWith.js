import React from "react"

const WorkWith = () => {
  return (
    <section className="work-with">
      <div className="container">
        <h2>Who We Work With</h2>
        <div className="work-with-list">
          <div className="work-with-item">
            <div className="work-with-number">01</div>
            <div>
              <h3>Early-Stage Startups</h3>
              <p>
                Funded. Aggressive timelines. Product-market fit to prove.
                Can't afford to wait three weeks per feature.
              </p>
            </div>
          </div>
          <div className="work-with-item">
            <div className="work-with-number">02</div>
            <div>
              <h3>Series A-C Companies</h3>
              <p>
                $1-10M revenue range. Dev velocity is the bottleneck to growth.
                Engineering team works but needs transformation.
              </p>
            </div>
          </div>
          <div className="work-with-item">
            <div className="work-with-number">03</div>
            <div>
              <h3>Forward Enterprises</h3>
              <p>
                Ready to modernize legacy processes. Willing to challenge
                assumptions about how long things take. Leadership committed
                to velocity as competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWith
