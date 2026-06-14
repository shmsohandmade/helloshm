import { useState } from "react"
import { Link } from "react-router-dom"

import "../styles/Journal.css"
import { journalEntries } from "../data/journalEntries"

const labels = [
  "All",
  "Diary",
  "Education",
  "Workshop",
  "Making",
  "Impact",
  "Behind the Scenes"
]

function Journal() {
  const [search, setSearch] = useState("")
  const [activeLabel, setActiveLabel] = useState("All")

  const filteredEntries = journalEntries.filter((entry) => {
    const matchesSearch =
      entry.title.toLowerCase().includes(search.toLowerCase()) ||
      entry.excerpt.toLowerCase().includes(search.toLowerCase())

    const matchesLabel =
      activeLabel === "All" || entry.labels.includes(activeLabel)

    return matchesSearch && matchesLabel
  })

  return (
    <main className="journal-page">
      <section className="journal-header">
        <p className="journal-label">Journal</p>

        <h1>Notes from the journey</h1>

        <p>
          Stories from the making journey, lessons from creating, and
          reflections on living a little more thoughtfully.
        </p>
      </section>

      <section className="journal-controls">
        <input
          className="journal-search"
          type="text"
          placeholder="Search journal..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="journal-filters">
          {labels.map((label) => (
            <button
              key={label}
              className={activeLabel === label ? "active" : ""}
              onClick={() => setActiveLabel(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="journal-grid">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => (
            <Link
              to={`/journal/${entry.slug}`}
              className="journal-card"
              key={entry.slug}
            >
              <img src={entry.image} alt={entry.title} />

              <div className="journal-card-content">
                <div className="journal-meta">
                  <div className="journal-tags">
                    {entry.labels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>

                  <p className="journal-date">
                    {entry.date}
                  </p>
                </div>

                <h2>{entry.title}</h2>

                <p>{entry.excerpt}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="journal-empty">
            No journal entries found.
          </p>
        )}
      </section>
    </main>
  )
}

export default Journal
