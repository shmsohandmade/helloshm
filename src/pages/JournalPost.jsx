import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { journalEntries } from "../data/journalEntries"
import "../styles/Journal.css"

function JournalPost() {
  const { slug } = useParams()
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)

  const entry = journalEntries.find((item) => item.slug === slug)

  if (!entry) {
    return (
      <main className="journal-post-page">
        <article className="journal-post-article">
          <h1>Journal entry not found</h1>
          <Link to="/journal">Back to Journal</Link>
        </article>
      </main>
    )
  }

  const activeGalleryImage =
    selectedGalleryImage?.slug === slug ? selectedGalleryImage.image : entry.gallery?.[0]

  return (
    <main className="journal-post-page">
      <article className="journal-post-article">
        <Link to="/journal">Back to Journal</Link>

        <img className="journal-post-hero-image" src={entry.image} alt={entry.title} />

        <div className="journal-post-tags">
          {entry.labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <p className="journal-post-date">{entry.date}</p>

        <h1>{entry.title}</h1>

        {entry.content.map((paragraph, index) => (
          <p className="journal-post-paragraph" key={index}>
            {paragraph}
          </p>
        ))}

        {entry.gallery && (
          <div className="journal-post-gallery">
            <img
              className="journal-post-gallery-main"
              src={activeGalleryImage}
              alt={`${entry.title} selected view`}
            />

            <div className="journal-post-gallery-thumbs">
              {entry.gallery.map((image, index) => (
                <button
                  className={activeGalleryImage === image ? "active" : ""}
                  key={image}
                  type="button"
                  onClick={() => setSelectedGalleryImage({ slug, image })}
                >
                  <img src={image} alt={`${entry.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        )}

        <section className="journal-post-cta">
          <h2>Every maker has a story.</h2>
          <p>
            Whether you've attended a workshop, started a refill habit, made
            something with your hands, or simply have a thought to share, we'd
            love to hear from you.
          </p>
          <a href="https://tally.so/r/A7QW8D" target="_blank" rel="noreferrer">
            Share Your Story
          </a>
        </section>
      </article>
    </main>
  )
}

export default JournalPost
