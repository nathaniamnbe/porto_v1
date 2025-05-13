import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="logo">Nathanael Bernike</div>

      {isMobile && (
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
        </div>
      )}

      <ul className={`nav-links ${isMobile ? (mobileMenuOpen ? "mobile-active" : "mobile") : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
