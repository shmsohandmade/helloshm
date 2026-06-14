function WorkshopOptionCard({
  title,
  detail,
  description,
  price,
  note,
  suitableFor,
  features,
  duration,
  pricing,
  color,
  learningPoints
}) {
  return (
    <article className="workshop-option-card" style={color ? { "--card-color": color } : undefined}>
      <h3>{title}</h3>

      {detail && <p className="card-detail">{detail}</p>}

      {(duration || pricing) && (
        <div className="option-summary">
          {duration && (
            <div>
              <span>Time</span>
              <strong>{duration}</strong>
            </div>
          )}

          {pricing && (
            <div>
              <span>Price</span>
              {pricing.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          )}
        </div>
      )}

      <p>{description}</p>

      {suitableFor && (
        <div className="option-list">
          <h4>Perfect for</h4>

          <ul>
            {suitableFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {features && (
        <div className="option-list">
          <h4>Features</h4>

          <ul>
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {learningPoints && (
        <div className="option-list">
          <h4>Extra focus</h4>

          <ul>
            {learningPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {price && <h4>{price}</h4>}

      {note && <p className="card-note">{note}</p>}
    </article>
  )
}

export default WorkshopOptionCard
