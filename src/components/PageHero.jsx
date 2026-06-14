function PageHero({ label, title, children }) {
  return (
    <section className="page-hero">
      <p className="section-kicker">{label}</p>

      <h1>{title}</h1>

      <p className="page-hero-text">{children}</p>
    </section>
  )
}

export default PageHero
