import React from "react"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Three weeks
          <br />
          is a choice.
          <br />
          So is one day.
        </h1>
        <p>
          Software development has a new physics.
          <br />
          You're still building with the old one.
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll to continue</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Hero
