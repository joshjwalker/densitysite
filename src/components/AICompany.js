import React from "react"

const AICompany = () => {
  return (
    <section className="ai-company" id="how-were-different">
      <div className="container">
        <div className="ai-company-intro">
          <h2>Everyone's an AI company now.</h2>
          <p>
            Most are prompt engineers with good marketing. They'll wrap GPT in a
            Slack integration and call it transformation.
          </p>
        </div>
        <div className="ai-company-diff">
          <h3>We're not that.</h3>
          <div className="diff-item">
            <h4>Principal-Level Depth</h4>
            <p>
              Multiple principal engineers with decades building production systems at scale.
              Distributed architectures. ML pipelines. Systems serving millions. We built this before AI made it cool.
            </p>
          </div>
          <div className="diff-item">
            <h4>Proprietary Pipelines</h4>
            <p>
              We don't resell tools. We've built our own AI development velocity pipelines.
              The difference between wrapped APIs and custom systems is the difference between 2x improvement and 15x improvement.
            </p>
          </div>
          <div className="diff-item">
            <h4>We Ship, Not Advise</h4>
            <p>
              We're not consultants focused on building software decks. The other half implement AI-augmented processes. Both
              with measurable velocity change. Not a PDF. Not a roadmap. Actual code.
            </p>
          </div>
          <div className="diff-item">
            <h4>Frontier Position</h4>
            <p>
              We test new models the week they drop. We know what works because we've shipped with it. Ask us what's changed
              in AI capabilities in the last 30 days. If we can't answer in detail, don't hire us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AICompany
