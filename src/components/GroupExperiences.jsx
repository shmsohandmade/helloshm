import ExperienceCard from "./ExperienceCard"
import SectionHeader from "./SectionHeader"

function GroupExperiences() {
  return (
    <section id="groups" className="workshop-section plain">
      <SectionHeader
        label="Education & Custom Workshops"
        title="Group sessions designed for learning, connection, and shared experiences."
      >
        From science projects and sustainability education to corporate team
        bonding and personalised wedding experiences, our workshops can be
        adapted for different communities and occasions.
      </SectionHeader>

      <div className="experience-grid">
        <ExperienceCard
          title="Educational Workshops"
          description="Sustainability and chemistry-focused sessions for schools and universities, supported by presentation slides, soap science explanations, and circular economy discussions."
          highlight="Student pricing available"
        />

        <ExperienceCard
          title="Corporate Experiences"
          description="Team bonding and sustainability-focused workshops suitable for offices, community events, CSR initiatives, and environmental education programmes."
          highlight="Suitable for 10-40 participants"
        />

        <ExperienceCard
          title="Wedding Soap Experience"
          description="Collaborative soap making experiences for couples, bridesmaids, groomsmen, and personalised handmade wedding favours with optional scent selection and custom finishing."
          highlight="Custom quotation available"
        />
      </div>
    </section>
  )
}

export default GroupExperiences
