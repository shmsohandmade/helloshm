import { useMemo, useState } from "react"
import ThoughtfulFindsMap from "../components/ThoughtfulFindsMap"
import { locationCategories, locations } from "../data/locations"
import "../styles/ThoughtfulFinds.css"

const allCategoriesLabel = "All Finds"
const contributionEmailBody = `Hello there,

I would like to contribute a low-waste-friendly place to the map.

Place Name:
[Insert place name]

Category:
[Refill Station, Recycling Collection, Share Your Bags, Bulk Store, Secondhand / Thrift, Repair Service, Compost / Food Waste, Sustainable Café, Community Initiative, Interesting Finds]

Address:
[Insert full address]

Operating Hours:
[Insert operating hours if available]

Why I'm sharing this place:
[Short description or experience]

Photos:
[Attach photos of the location, products, refill station, recycling area, etc.]

Contributor Name:
[Your name or preferred display name]

Social Media (Optional):
[Instagram / Website / TikTok]

Thank you for building this community resource`

function ThoughtfulFinds() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel)
  const [sortBy, setSortBy] = useState("newest")
  const [selectedId, setSelectedId] = useState(locations[0]?.id)
  const [expandedId, setExpandedId] = useState(null)

  const filteredLocations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    const places = locations.filter((location) => {
      const matchesCategory =
        activeCategory === allCategoriesLabel || location.category === activeCategory

      const searchableText = [
        location.name,
        location.category,
        location.address,
        location.operatingHours,
        location.contributor,
        location.description
      ]
        .join(" ")
        .toLowerCase()

      return matchesCategory && searchableText.includes(search)
    })

    return places.sort((first, second) => {
      if (sortBy === "name") {
        return first.name.localeCompare(second.name)
      }

      if (sortBy === "category") {
        return first.category.localeCompare(second.category) || first.name.localeCompare(second.name)
      }

      return new Date(second.addedAt) - new Date(first.addedAt)
    })
  }, [activeCategory, searchTerm, sortBy])

  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedId) || filteredLocations[0]

  const handleCardToggle = (locationId) => {
    setSelectedId(locationId)
    setExpandedId((currentId) => (currentId === locationId ? null : locationId))
  }

  const showOnMap = (locationId) => {
    setSelectedId(locationId)
    document.getElementById("conscious-map-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <main className="thoughtful-page">
      <section className="thoughtful-hero">
        <p className="thoughtful-kicker">Community Map</p>

        <h1>Conscious Map</h1>

        <p className="thoughtful-subtitle">
          Discover refill spots, share-your-bags stations, and
          low-waste-friendly places shared by the community.
        </p>

        <p>
          A gentle guide for everyday choices around Malaysia, from practical
          errands to small places worth remembering. Locations here are manually
          added for now, so they are easy to update as the community grows.
        </p>
      </section>

      <section className="thoughtful-tools" aria-label="Find and filter conscious map places">
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by name, area, category, or keyword"
          aria-label="Search conscious map"
        />

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          aria-label="Sort conscious map places"
        >
          <option value="newest">Newest added</option>
          <option value="name">A-Z</option>
          <option value="category">Category</option>
        </select>
      </section>

      <section className="thoughtful-filters" aria-label="Conscious map categories">
        {[allCategoriesLabel, ...locationCategories].map((category) => (
          <button
            className={category === activeCategory ? "active" : ""}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="thoughtful-map-layout" id="conscious-map-section">
        <div className="thoughtful-map-panel">
          <ThoughtfulFindsMap
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedId}
          />

          {selectedLocation && (
            <article className="featured-place">
              <span>{selectedLocation.category}</span>
              <h2>{selectedLocation.name}</h2>
              <p>{selectedLocation.description}</p>
              <a href={selectedLocation.googleMapsLink} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </article>
          )}
        </div>

        <div className="thoughtful-list" aria-label="Conscious map places list">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => {
              const isExpanded = expandedId === location.id
              const isSelected = selectedLocation?.id === location.id

              return (
                <article
                  className={`thoughtful-card ${isSelected ? "active" : ""} ${isExpanded ? "expanded" : ""}`}
                  key={location.id}
                >
                  <button
                    className="thoughtful-card-summary"
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => handleCardToggle(location.id)}
                  >
                    <span>{location.category}</span>
                    <h2>{location.name}</h2>
                  </button>

                  {isExpanded && (
                    <div className="thoughtful-card-details">
                      {location.image ? (
                        <img
                          className="thoughtful-card-image"
                          src={location.image}
                          alt={location.name}
                        />
                      ) : (
                        <div className="thoughtful-card-image-placeholder">
                          Photo can be added here
                        </div>
                      )}

                      <p>{location.description}</p>

                      <dl>
                        <div>
                          <dt>Address</dt>
                          <dd>{location.address}</dd>
                        </div>
                        <div>
                          <dt>Hours</dt>
                          <dd>{location.operatingHours}</dd>
                        </div>
                        <div>
                          <dt>Shared by</dt>
                          <dd>{location.contributor}</dd>
                        </div>
                      </dl>

                      <div className="thoughtful-card-actions">
                        <a href={location.googleMapsLink} target="_blank" rel="noreferrer">
                          Google Maps
                        </a>
                        <button type="button" onClick={() => showOnMap(location.id)}>
                          Show on Map
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              )
            })
          ) : (
            <p className="thoughtful-empty">
              No places found yet. Try another search or category.
            </p>
          )}
        </div>
      </section>

      <section className="thoughtful-cta">
        <p className="thoughtful-kicker">Contribute</p>
        <h2>Know a low-waste-friendly place?</h2>
        <p>
          Help grow the Conscious Map by sharing refill stations, repair
          services, community initiatives, and other mindful places worth
          visiting.
        </p>
        <a
          href="https://tally.so/r/aQlxB2"
          target="_blank"
          rel="noreferrer"
        >
          Suggest a Place
        </a>
      </section>
    </main>
  )
}

export default ThoughtfulFinds
