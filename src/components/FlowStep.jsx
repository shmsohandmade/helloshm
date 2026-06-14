function FlowStep({ number, title, description }) {
  return (
    <article className="flow-step">
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  )
}

export default FlowStep
