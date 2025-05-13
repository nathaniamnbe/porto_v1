"use client"

import { useState, useEffect, useRef } from "react"
import "./Navbar.css"

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
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

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

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
          <a href="#about" className={activeDropdown === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className={activeDropdown === "project" ? "active" : ""}
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault()
                toggleDropdown("project")
              }
            }}
          >
            Project
          </a>
          {activeDropdown === "project" && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <div className="dropdown-arrow"></div>
              <a href="#web-projects">Web Projects</a>
              <a href="#mobile-projects">Mobile Projects</a>
              <a href="#ui-projects">UI/UX Projects</a>
            </div>
          )}
        </li>
        <li>
          <a href="#experience" className={activeDropdown === "experience" ? "active" : ""}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className={activeDropdown === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
