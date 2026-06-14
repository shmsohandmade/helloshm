import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import FaceBodyWorkshopDetail from "../components/FaceBodyWorkshopDetail"
import Booker from "../components/Booker"
import { workshops } from "../data/workshops"
import WorkshopOptionCard from "../components/WorkshopOptionCard"
import "../styles/WorkshopPage.css"

function WorkshopDetail() {
  const { slug } = useParams()
  const workshop = workshops.find((item) => item.slug === slug)
  const [isBookerOpen, setIsBookerOpen] = useState(false)

  if (!workshop) {
    return (
      <main className="workshop-detail-page">
        <section className="workshop-detail-missing">
          <p className="section-kicker">Workshop</p>

          <h1>Workshop not found.</h1>

          <Link to="/workshops">Back to workshops</Link>
        </section>
      </main>
    )
  }

  if (workshop.faceBodySections || workshop.usedCookingOilSections) {
    return <FaceBodyWorkshopDetail workshop={workshop} />
  }

  if (workshop.comingSoon) {
    return (
      <main className="workshop-detail-page" style={{ "--workshop-color": workshop.color }}>
        <Link className="workshop-back-link" to="/workshops">
          Back to workshops
        </Link>

        <section className="workshop-coming-soon">
          <p className="section-kicker">{workshop.category}</p>
          <h1>{workshop.title}</h1>
          <p>Coming Soon!</p>
        </section>
      </main>
    )
  }

  return (
    <main className="workshop-detail-page" style={{ "--workshop-color": workshop.color }}>
      <Link className="workshop-back-link" to="/workshops">
        Back to workshops
      </Link>

      <section className="workshop-detail-hero">
        <div className="workshop-detail-image">
          <img src={workshop.image} alt={workshop.title} />
        </div>

        <div className="workshop-detail-content">
          <p className="section-kicker">{workshop.category}</p>

          <h1>{workshop.title}</h1>

          <div className="workshop-detail-meta">
            <span>{workshop.price}</span>
            <span>{workshop.duration}</span>
          </div>

          <p>{workshop.description}</p>

          <div className="workshop-action-buttons">
            {workshop.booking ? (
              <button
                className="workshop-action-button primary"
                type="button"
                onClick={() => setIsBookerOpen(true)}
              >
                Book Workshop
              </button>
            ) : (
              <a
                className="workshop-action-button primary"
                href={`mailto:kim@sohandmade.co?subject=${encodeURIComponent(`Book Workshop - ${workshop.title}`)}`}
              >
                Book Workshop
              </a>
            )}

            <a
              className="workshop-action-button outline"
              href="https://tally.so/r/PdP8ex"
              target="_blank"
              rel="noreferrer"
            >
              Enquire
            </a>
          </div>
        </div>
      </section>

      {isBookerOpen && workshop.booking && (
        <section className="workshop-booking-panel" aria-label="Workshop booking calendar">
          <div className="workshop-booking-header">
            <div>
              <p className="section-kicker">Booking</p>

              <h2>Book your workshop</h2>
            </div>

            <button type="button" onClick={() => setIsBookerOpen(false)}>
              Close
            </button>
          </div>

          <Booker
            username={workshop.booking.username}
            eventSlug={workshop.booking.eventSlug}
          />
        </section>
      )}

      {workshop.experiences && (
        <section className="workshop-detail-options">
          <div className="section-header">
            <p className="section-kicker">Experiences</p>

            <h2>Choose the workshop style that fits you</h2>
          </div>

          <div className="workshop-grid">
            {workshop.experiences.map((experience) => (
              <WorkshopOptionCard
                key={experience.title}
                title={experience.title}
                detail={experience.detail}
                description={experience.description}
                suitableFor={experience.suitableFor}
                features={experience.features}
                duration={experience.duration}
                pricing={experience.pricing}
                color={experience.color}
                learningPoints={experience.learningPoints}
              />
            ))}
          </div>
        </section>
      )}

      {workshop.learningPoints && (
        <section className="workshop-detail-info single">
          <article>
            <h2>What you will learn</h2>

            <ul>
              {workshop.learningPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      {workshop.bringHome && (
        <section className="workshop-detail-info single">
          <article>
            <h2>What you will bring back home</h2>

            <ul>
              {workshop.bringHome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      {workshop.details && (
        <section className="workshop-detail-info single">
          <article>
            <h2>Session details</h2>

            <ul>
              {workshop.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      <section className="workshop-detail-options">
        <div className="section-header">
          <p className="section-kicker">
            {workshop.experiences ? "Batch Size Options" : "Options"}
          </p>

          <h2>{workshop.experiences ? "Choose your batch size" : "Workshop formats"}</h2>
        </div>

        <div className="workshop-grid">
          {workshop.options.map((option) => (
            <WorkshopOptionCard
              key={option.title}
              title={option.title}
              detail={option.detail}
              description={option.description}
              price={option.price}
              features={option.features}
            />
          ))}
        </div>
      </section>

      {workshop.mouldOptions && (
        <section className="workshop-detail-info mould-options">
          <article>
            <h2>{workshop.mouldOptions.title}</h2>

            <p>{workshop.mouldOptions.description}</p>

            <p className="workshop-reward">{workshop.mouldOptions.reward}</p>
          </article>

          <article>
            <h2>Recommended mould materials</h2>

            <ul>
              {workshop.mouldOptions.allowed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="workshop-subheading">Avoid</h2>

            <ul>
              {workshop.mouldOptions.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      <section className="workshop-detail-info">
        <article>
          <h2>Good for</h2>

          <ul>
            {workshop.goodFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <h2>Note</h2>

          <p>{workshop.note}</p>
        </article>
      </section>

      {workshop.workshopComparison && (
        <section className="workshop-comparison-section">
          <div className="section-header compact">
            <p className="section-kicker">Compare</p>

            <h2>Essential or Signature?</h2>
          </div>

          <div className="workshop-comparison-table-wrap">
            <table className="workshop-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Essential</th>
                  <th>Signature</th>
                </tr>
              </thead>

              <tbody>
                <tr className="shared-row">
                  <th>{workshop.workshopComparison.sharedTitle}</th>
                  <td colSpan="2">
                    <ul>
                      {workshop.workshopComparison.sharedItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {workshop.workshopComparison.rows.map((row) => (
                  <tr key={row.feature}>
                    <th>{row.feature}</th>
                    <td>{row.essential}</td>
                    <td>{row.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  )
}

export default WorkshopDetail
