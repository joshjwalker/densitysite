import React from "react"

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Design Session",
      description: "Product describes. Engineer animates. AI generates. Iterate until product approves.",
      time: "Minutes"
    },
    {
      number: "02",
      title: "Prototype Session",
      description: "Drop the design in. Get working UI. Iterate live with product.",
      time: "Minutes"
    },
    {
      number: "03",
      title: "Build Session",
      description: "Engineer builds page logic and backend with AI. The frontend is already approved.",
      time: "Hours"
    },
    {
      number: "04",
      title: "Demo + Ship",
      description: "Feature done. Demo it at standup. Collect feedback. Iterate same day if needed.",
      time: "Next morning"
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <span className="step-label">Step {step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-time">{step.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
