import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { workshops } from "../data/workshops"
import SectionHeader from "./SectionHeader"

function WorkshopCatalogue() {
  const { hash } = useLocation()
  const selectedWorkshopSlug = hash.replace("#", "")

  return (
    <section className="workshop-section plain" id="workshop-types">
      <SectionHeader
        label="Workshop Types"
        title="Choose the soap making experience that fits your group."
      >
        Each workshop is designed with a clear purpose, blending creativity, 
        craftsmanship, and sustainability through face and body soap making, 
        used cooking oil soap making, and melt-and-pour soap projects.
      </SectionHeader>

      <div className="workshop-catalogue-grid">
        {workshops.map((workshop) => (
          <Link
            className={`workshop-catalogue-card ${
              selectedWorkshopSlug === workshop.slug ? "is-highlighted" : ""
            }`}
            id={workshop.slug}
            key={workshop.slug}
            style={{ "--workshop-color": workshop.color }}
            to={`/workshops/${workshop.slug}`}
          >
            <img src={workshop.image} alt={workshop.title} />

            <div className="workshop-catalogue-content">
              <span>{workshop.category}</span>

              <h3>{workshop.shortTitle}</h3>

              <p>{workshop.excerpt}</p>

              <div className="workshop-catalogue-meta">
                <strong>{workshop.price}</strong>
                <span>{workshop.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WorkshopCatalogue
