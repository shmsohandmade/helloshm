import "../styles/Contact.css"

const inquirySections = [
  {
    title: "Workshop inquiries",
    text: "For school sessions, corporate workshops, private groups, or community events.",
    prompt: "Share your preferred date, group size, and workshop type."
  },
  {
    title: "Product inquiries",
    text: "For handmade soap availability, product recommendations, and restock questions.",
    prompt: "Tell us what you are looking for and whether it is for personal use or gifting."
  },
  {
    title: "Custom gifts",
    text: "For wedding favours, event gifts, thoughtful bundles, or small-batch custom soap.",
    prompt: "Include your quantity, timeline, and any scent or packaging preferences."
  }
]

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-kicker">Contact</p>

        <h1>Let us help you choose the right handmade experience.</h1>

        <p>
          Reach out for workshops, handmade soap, custom gifts, or thoughtful
          collaborations with sohandmade.co.
        </p>
      </section>

      <section className="contact-actions" aria-label="Contact options">
        <a className="contact-action primary" href="mailto:kim@sohandmade.co">
          Email kim@sohandmade.co
        </a>

        <a
          className="contact-action"
          href="https://instagram.com/helloshm"
          target="_blank"
          rel="noreferrer"
        >
          Instagram @helloshm
        </a>
      </section>

      <section className="inquiry-section">
        <div className="inquiry-header">
          <p className="contact-kicker">Inquiries</p>

          <h2>What can we help with?</h2>
        </div>

        <div className="inquiry-grid">
          {inquirySections.map((section) => (
            <article className="inquiry-card" key={section.title}>
              <h3>{section.title}</h3>

              <p>{section.text}</p>

              <span>{section.prompt}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Contact
