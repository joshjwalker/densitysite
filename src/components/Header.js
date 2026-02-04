import React from "react"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header-logo">Swarm Runner</a>
        <nav className="header-nav">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#early-access">Early Access</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
