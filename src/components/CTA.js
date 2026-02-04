import React from "react"

const CTA = () => {
  return (
    <section className="early-access" id="early-access">
      <div className="container">
        <h2>Get early access.</h2>
        <p>We're onboarding teams now. Drop your email and we'll be in touch.</p>
        <form
          className="early-access-form"
          action="https://formsubmit.co/4223b338fc3ea669b630132fc715512f"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Swarm Runner - Early Access Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company name (optional)"
            />
          </div>
          <div className="form-group">
            <select name="team_size" defaultValue="">
              <option value="" disabled>Team size (optional)</option>
              <option value="1-5">1-5</option>
              <option value="6-20">6-20</option>
              <option value="21-50">21-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>
          </div>
          <button type="submit" className="btn-cta">Request Access</button>
          <p className="early-access-note">No spam. No sales drip. Just early access.</p>
        </form>
      </div>
    </section>
  )
}

export default CTA
