import { useState } from "react"
import { Link } from "react-router-dom"

import "../styles/Navbar.css"
import logo from "../assets/logoline.png"

function Navbar() {
  const [isWorkshopMenuOpen, setIsWorkshopMenuOpen] = useState(false)

  return (

    <nav className="navbar">

      <Link to="/" className="logo">

        <img src={logo} alt="HELLOSHM Logo" />

        <span className="brand-name">
          helloshm
        </span>

      </Link>

      <div className="nav-links">

        <Link to="/products">Products</Link>

        <div className={`nav-dropdown ${isWorkshopMenuOpen ? "is-open" : ""}`}>
          <Link
            className="nav-dropdown-link"
            to="/workshops"
            onClick={() => setIsWorkshopMenuOpen(false)}
          >
            Workshops
          </Link>

          <button
            className="nav-dropdown-toggle"
            type="button"
            aria-expanded={isWorkshopMenuOpen}
            aria-label="Open workshop menu"
            onClick={() => setIsWorkshopMenuOpen((isOpen) => !isOpen)}
          >
            ▾
          </button>

          <div className="dropdown-menu">
            <Link to="/workshops/face-body-soap-making-workshop" onClick={() => setIsWorkshopMenuOpen(false)}>Face & Body Soap Workshop</Link>
            <Link to="/workshops/used-cooking-oil-soap-making-workshop" onClick={() => setIsWorkshopMenuOpen(false)}>Used Cooking Oil Workshop</Link>
            <Link to="/workshops/melt-pour-soap-making-workshop" onClick={() => setIsWorkshopMenuOpen(false)}>Melt & Pour Workshop</Link>
            <Link to="/workshops#groups" onClick={() => setIsWorkshopMenuOpen(false)}>Education & Custom Workshops</Link>
          </div>
        </div>

        <Link to="/journal">Journal</Link>

        <Link to="/thoughtful-finds">Conscious Map</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>

  )
}

export default Navbar
