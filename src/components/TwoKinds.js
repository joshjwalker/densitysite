import React from "react"

const TwoKinds = () => {
  return (
    <section className="two-kinds" id="what-we-do">
      <div className="container">
        <h2>
          There are two kinds
          <br />
          of software teams now.
        </h2>
        <div className="two-kinds-grid">
          <div className="two-kinds-card">
            <div className="two-kinds-number">01</div>
            <h3>The First Kind</h3>
            <p>
              Spends three weeks on a feature because that's how long
              features take. They have standups about standups about
              standups.
            </p>
          </div>
          <div className="two-kinds-card">
            <div className="two-kinds-number">02</div>
            <h3>The Second Kind</h3>
            <p>
              Finishes the same feature by end of day. Not because they're
              faster. Because they're reorganized around different physics.
            </p>
          </div>
        </div>
        <div className="two-kinds-statement">
          We turn the first kind into the second kind.
        </div>
      </div>
    </section>
  )
}

export default TwoKinds
