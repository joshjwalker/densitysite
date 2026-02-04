import React from "react"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Two weeks is too long
          <br />
          to ship a feature.
        </h1>
        <p className="hero-subtitle">Swarm Runner gets it done in a day.</p>
        <form
          className="hero-form"
          action="https://formsubmit.co/4223b338fc3ea669b630132fc715512f"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Swarm Runner - Early Access (Hero)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            required
          />
          <button type="submit" className="btn-cta">Get Early Access</button>
        </form>
        <p className="hero-description">
          Swarm Runner is an AI-powered collaboration platform that collapses the distance
          between product vision and shipped code.
        </p>
        <div className="hero-illustration">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="110" y1="90" x2="175" y2="90" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="225" y1="90" x2="290" y2="90" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="150" y1="40" x2="185" y2="75" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="40" x2="215" y2="75" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="150" y1="140" x2="185" y2="105" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="140" x2="215" y2="105" stroke="#00d4aa" strokeWidth="1.5" opacity="0.3" />
            <line x1="110" y1="90" x2="150" y2="40" stroke="#00d4aa" strokeWidth="1.5" opacity="0.15" />
            <line x1="290" y1="90" x2="250" y2="40" stroke="#00d4aa" strokeWidth="1.5" opacity="0.15" />
            <line x1="110" y1="90" x2="150" y2="140" stroke="#00d4aa" strokeWidth="1.5" opacity="0.15" />
            <line x1="290" y1="90" x2="250" y2="140" stroke="#00d4aa" strokeWidth="1.5" opacity="0.15" />
            <circle cx="110" cy="90" r="14" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="290" cy="90" r="14" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="150" cy="40" r="10" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="250" cy="40" r="10" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="150" cy="140" r="10" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="250" cy="140" r="10" fill="#0d2e2e" stroke="#00d4aa" strokeWidth="1.5" />
            <circle cx="200" cy="90" r="28" fill="#00d4aa" opacity="0.08" />
            <circle cx="200" cy="90" r="20" fill="#00d4aa" opacity="0.15" />
            <circle cx="200" cy="90" r="12" fill="#00d4aa" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
