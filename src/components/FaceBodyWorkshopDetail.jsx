import { useState } from "react"
import { Link } from "react-router-dom"
import Booker from "./Booker"

function FaceBodySectionHeader({ label, title, text }) {
  return (
    <div className="face-body-section-header">
      <p className="section-kicker">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function FaceBodyExperienceCard({ experience }) {
  return (
    <article className="face-body-experience-card">
      <span>{experience.tag}</span>
      <h3>{experience.title}</h3>

      <div className="face-body-card-columns">
        <div>
          <h4>Perfect for</h4>
          <ul>
            {experience.perfectFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Features</h4>
          <ul>
            {experience.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="face-body-pricing">
        {experience.pricing.map((item) => (
          <strong key={item}>{item}</strong>
        ))}
      </div>
    </article>
  )
}

function FaceBodySimpleCard({ title, children }) {
  return (
    <article className="face-body-simple-card">
      <h3>{title}</h3>
      {children}
    </article>
  )
}

function FaceBodyIconGrid({ items }) {
  return (
    <div className="face-body-icon-grid">
      {items.map((item, index) => (
        <article key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  )
}

function FaceBodyChecklist({ items }) {
  return (
    <div className="face-body-checklist">
      {items.map((item) => (
        <article key={item}>
          <span aria-hidden="true"></span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  )
}

function FaceBodyWorkshopDetail({ workshop }) {
  const [isBookerOpen, setIsBookerOpen] = useState(false)
  const content = workshop.faceBodySections || workshop.usedCookingOilSections
  const isUsedCookingOil = Boolean(workshop.usedCookingOilSections)
  const heroImageFirst = content.heroImagePosition === "left"
  const pageClassName = `face-body-page ${isUsedCookingOil ? "used-oil-page" : ""}`
  const heroClassName = `face-body-hero ${heroImageFirst ? "image-left" : ""}`

  return (
    <main className={pageClassName} style={{ "--workshop-color": workshop.color }}>
      <Link className="workshop-back-link" to="/workshops">
        Back to workshops
      </Link>

      <section className={heroClassName}>
        <div className="face-body-hero-content">
          <p className="section-kicker">{workshop.category}</p>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroSubtitle}</p>

          <div className="workshop-action-buttons">
            <button
              className="workshop-action-button primary"
              type="button"
              onClick={() => setIsBookerOpen(true)}
            >
              Book Workshop
            </button>

            <a
              className="workshop-action-button outline"
              href="https://tally.so/r/PdP8ex"
              target="_blank"
              rel="noreferrer"
            >
              Make an Enquiry
            </a>
          </div>
        </div>

        <div className="face-body-hero-image">
          <img src={workshop.image} alt={content.heroTitle} />
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

      <section className="face-body-section">
        <FaceBodySectionHeader
          label="Choose Your Experience"
          title="Two ways to make soap, both guided with care."
          text={content.experienceIntro || "Choose a calm minimalist session or a more expressive creative workshop."}
        />

        <div className="face-body-experience-grid">
          {content.experiences.map((experience) => (
            <FaceBodyExperienceCard experience={experience} key={experience.title} />
          ))}
        </div>
      </section>

      <section className="face-body-section">
        <FaceBodySectionHeader
          label={content.batchLabel || "Batch Options"}
          title={content.batchTitle || "Choose the batch size that fits your day."}
        />

        <div className="face-body-batch-grid">
          {content.batchOptions.map((option) => (
            <FaceBodySimpleCard title={option.title} key={option.title}>
              <strong>{option.amount}</strong>
              <p>{option.note}</p>
            </FaceBodySimpleCard>
          ))}
        </div>
      </section>

      <section className="face-body-section ocean">
        <FaceBodySectionHeader
          label="Core Workshop Learning"
          title="What every participant learns."
        />

        <FaceBodyIconGrid items={content.learning} />
      </section>

      {content.sustainability && (
        <section className="face-body-section">
          <article className="face-body-editorial-card">
            <p className="section-kicker">Sustainability & Circular Living</p>
            <h2>{content.sustainability.title}</h2>
            <p>{content.sustainability.text}</p>
          </article>
        </section>
      )}

      <section className="face-body-section face-body-mould-section">
        <FaceBodySectionHeader
          label="Mould Options"
          title="Use studio moulds or bring your own."
          text={content.mouldOptions.intro}
        />

        <div className="face-body-mould-grid">
          <FaceBodySimpleCard title="Recommended">
            <ul>
              {content.mouldOptions.recommended.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FaceBodySimpleCard>

          <FaceBodySimpleCard title="Avoid">
            <ul>
              {content.mouldOptions.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FaceBodySimpleCard>
        </div>

        <p className="face-body-mould-note">{content.mouldOptions.note}</p>
      </section>

      <section className="face-body-section">
        <article className="face-body-return-card">
          <p className="section-kicker">Return & Reuse Programme</p>
          <h2>Sustainability continues after the workshop.</h2>
          <p>{content.returnProgram}</p>
        </article>
      </section>

      <section className="face-body-section">
        <FaceBodySectionHeader
          label="Practical Information"
          title="Before you book."
        />

        <div className="face-body-info-grid">
          {content.practicalInfo.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="face-body-section">
        <FaceBodySectionHeader
          label="What Participants Bring Home"
          title="A quiet keepsake from the making process."
        />

        <FaceBodyChecklist items={content.bringHome} />
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

export default FaceBodyWorkshopDetail
