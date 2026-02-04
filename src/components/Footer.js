import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-logo">Swarm Runner</span>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#features">About</a>
              <a href="#how-it-works">White Paper</a>
              <a href="#early-access">Contact</a>
            </div>
          </div>
        </div>
        <p className="footer-copyright">&copy; 2024 Swarm Runner. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
