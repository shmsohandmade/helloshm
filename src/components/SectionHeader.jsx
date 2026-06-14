function SectionHeader({ label, title, children, spacious = true }) {
  const headerClass = spacious ? "section-header" : "section-header compact"

  return (
    <div className={headerClass}>
      <p className="section-kicker">{label}</p>

      <h2>{title}</h2>

      {children && <p>{children}</p>}
    </div>
  )
}

export default SectionHeader
