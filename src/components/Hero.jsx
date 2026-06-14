import { Link } from "react-router-dom"
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          sohandmade.co
        </p>

        <h1>
          Thoughtfully made, naturally you.
        </h1>

        <p className="hero-description">
          Order directly from our website and 5% of the profit will help fund
          beach clean-up initiatives through So Beachy.
        </p>

        <div className="hero-buttons">

          <Link to="/products">
            Shop Products
          </Link>

          <Link to="/workshops">
            Explore Workshops
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Hero
