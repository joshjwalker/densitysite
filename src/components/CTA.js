import React from "react"

const CTA = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <h2>
          Your roadmap assumes
          <br />
          your current velocity.
        </h2>
        <p>What if that assumption is wrong?</p>
        <form
          className="contact-form"
          action="https://formsubmit.co/josh@ethicrising.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Density inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">What Needs To Speed Up?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your current development process and what you'd like to accelerate..."
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Let's Find Out
          </button>
        </form>
      </div>
    </section>
  )
}

export default CTA
