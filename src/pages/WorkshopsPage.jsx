import GroupExperiences from "../components/GroupExperiences"
import WorkshopCatalogue from "../components/WorkshopCatalogue"
import WorkshopHero from "../components/WorkshopHero"
import "../styles/WorkshopPage.css"

function WorkshopsPage() {
  return (
    <main className="workshops-page">
      <WorkshopHero />
      <WorkshopCatalogue />
      <GroupExperiences />
    </main>
  )
}

export default WorkshopsPage
