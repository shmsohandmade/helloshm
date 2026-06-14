import "../styles/Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>sohandmade.co</h2>

          <p>
            Thoughtfully made, naturally you.
          </p>

          <span>
            Sustainable soap making, mindful workshops,
            and circular living through craft and community.
          </span>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/products">Products</Link>

          <Link to="/workshops">Workshops</Link>

          <Link to="/journal">Journal</Link>

          <Link to="/impact">Impact</Link>

          <Link to="/thoughtful-finds">Conscious Map</Link>

        </div>

        <div className="footer-column">

          <h4>Connect</h4>

          <a href="https://instagram.com/helloshm">
            Instagram
          </a>

          <a href="#">
            Email
          </a>

        </div>

        <div className="footer-column">

          <h4>Info</h4>

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          Copyright 2026 sohandmade.co - Operated by So Hand Made Enterprise
        </p>

      </div>

    </footer>
  )
}

export default Footer
