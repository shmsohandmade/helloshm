import WorkshopCard from "./WorkshopCard"

function Workshops() {
  return (

    <section
      style={{
        padding: "100px 40px",
        background: "var(--color-bg)"
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px"
        }}
      >

        <WorkshopCard
          tag="Trash to Treasure"
          title="Used Cooking Oil Soap Making"
          description="Transform used cooking oil into sustainable handmade soap through an immersive hands-on workshop."
        />

        <WorkshopCard
          tag="Natural Skincare"
          title="Face & Body Soap Making"
          description="Craft gentle soaps using nourishing oils, essential oils, and natural ingredients."
        />

      </div>

    </section>

  )
}

export default Workshops
