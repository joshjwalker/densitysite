import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-disclaimer">
            This isn't a gimmick. This is information about how things work now.
            <br />
            What you do with it is on you.
          </p>
          <div className="footer-bottom">
            <span className="footer-logo">DENSITY <span className="logo-accent">SOLUTIONS</span></span>
            <div className="footer-links">
              <a href="mailto:jwalker@densitysolutions.io">jwalker@densitysolutions.io</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
