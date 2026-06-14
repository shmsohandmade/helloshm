import FlowStep from "./FlowStep"
import SectionHeader from "./SectionHeader"

const flowSteps = [
  ["01", "Welcome", "Introduction to the workshop and materials."],
  ["02", "Safety", "Understanding lye handling and precautions."],
  ["03", "Basics", "A simple explanation of soap science and process."],
  ["04", "Create", "Mixing oils, lye solution, and soap batter."],
  ["05", "Customise", "Scent, colour, mould, or finishing choices depending on session."],
  ["06", "Cure", "Guidance on curing, cutting, storage, and aftercare."]
]

function WorkshopFlow() {
  return (
    <section id="flow" className="workshop-section plain">
      <SectionHeader
        label="Workshop Flow"
        title="A calm, guided process from learning to making."
      />

      <div className="flow-grid">
        {flowSteps.map(([number, title, description]) => (
          <FlowStep
            key={number}
            number={number}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkshopFlow
