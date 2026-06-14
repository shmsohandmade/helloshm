function ExperienceCard({ title, description, highlight }) {
  return (
    <article className="experience-card">
      <h3>{title}</h3>

      <p>{description}</p>

      {highlight && <p className="card-highlight">{highlight}</p>}
    </article>
  )
}

export default ExperienceCard
