import "../styles/WorkshopCard.css"

function WorkshopCard(props) {
  return (

    <div className="workshop-card">

      <p className="workshop-tag">
        {props.tag}
      </p>

      <h2>
        {props.title}
      </h2>

      <p className="workshop-description">
        {props.description}
      </p>

      <a href="#">
        Learn More
      </a>

    </div>

  )
}

export default WorkshopCard