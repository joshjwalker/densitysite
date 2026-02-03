import React from "react"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header-logo">
          DENSITY <span className="logo-accent">SOLUTIONS</span>
        </a>
        <nav className="header-nav">
          <a href="#what-we-do">What We Do</a>
          <a href="#how-were-different">How We're Different</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
