import { Link } from "react-router-dom"
import logoLineB from "../assets/logolineb.png"
import "../styles/About.css"

const craftPoints = [
  {
    title: "Ingredient Intention",
    text: "Every oil, clay, butter, and botanical is selected with intention, balancing function, feel, and experience."
  },
  {
    title: "Small Batch Making",
    text: "Products are made slowly in batches that allow room for care, observation, and refinement."
  },
  {
    title: "Hands-On Learning",
    text: "Each formula teaches something about texture, scent, lather, and how raw materials behave."
  }
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-kicker">About sohandmade.co</p>
          <h1>Thoughtfully made, naturally you.</h1>
          <p>
            So Hand Made is a homegrown brand dedicated to thoughtful products,
            hands-on learning, and the joy of making things by hand.
          </p>
        </div>
      </section>

      <section className="about-origin about-split-section">
        <div className="about-origin-heading">
          <p className="about-kicker">Our Beginning</p>
          <h2>A quiet curiosity that slowly became something more.</h2>
        </div>

        <div className="about-section-copy">
          <p>
            The journey began at 18, while searching for gentler skincare options
            for acne-prone skin. What started as a simple curiosity about
            ingredients soon led to cold process soapmaking, and countless hours spent
            making, testing, and creating.
          </p>
          <p>
            At university, soaps were often made for fundraising events, while
            many more found their way to friends and family. As the collection of
            handmade soaps grew, so did the encouragement from the people around
            me. What began as a personal hobby slowly became something worth
            sharing with others.
          </p>
          <p>
            The more soaps I made, the more I appreciated the balance between
            creativity and purpose. There was something deeply satisfying about
            transforming simple raw materials into products that became part of my
            daily routine.
          </p>
          <p>
            So Hand Made was built on a simple idea: to create products we can
            understand, trust, and genuinely enjoy using every day. Whether it's a
            shampoo bar, a handmade soap, or a workshop experience, that same
            intention continues to guide everything we make.
          </p>
          <p>
            Because the things we use every day become part of our routines, and
            sometimes the smallest rituals can make the biggest difference.
          </p>
        </div>

        <figure className="about-support-image">
          <img src="/Aboutpage/about-me.jpg" alt="Founder of So Hand Made" />
        </figure>
      </section>

      <section className="about-craft">
        <div className="about-craft-intro">
          <div className="about-section-header">
            <p className="about-kicker">Science & Craft</p>
            <h2>Where formulation meets craft.</h2>
            <p>
              Every product begins with a purpose. Sometimes it is to create a
              gentler cleanser, sometimes a more nourishing shampoo bar, and
              sometimes simply to explore a new ingredient or technique.
            </p>
            <p>
              Formulation is a process of understanding how ingredients work
              together. From oils and butters to clays, botanicals, and
              essential oils, each ingredient contributes something unique to
              the final product and the experience of using it.
            </p>
            <p>
              While formulation provides the foundation, craftsmanship brings
              each product to life. Working in small batches allows room for
              observation, refinement, and the attention to detail that handmade
              products deserve.
            </p>
            <p>
              The result is a collection of products shaped by curiosity,
              thoughtful formulation, and the belief that everyday essentials
              should be made with care.
            </p>
          </div>

          <figure className="about-support-image about-craft-image">
            <img src="/Aboutpage/aloecoffee.png" alt="Aloe coffee handmade soap" />
          </figure>
        </div>

        <div className="about-craft-grid">
          {craftPoints.map((point) => (
            <article className="about-craft-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-curiosity">
        <div className="about-curiosity-card">
          <p className="about-kicker">Following Curiosity</p>
          <h2>Following Curiosity</h2>
          <p>
            Soapmaking may have been the beginning, but curiosity rarely stays in
            one place.
          </p>
          <p>
            Over the years, that same desire to understand ingredients and
            everyday products led to the development of shampoo bars, household
            cleaners, and lower-waste alternatives for daily living. Each product
            began with the same question:
          </p>
          <blockquote>"Can this be made more thoughtfully?"</blockquote>
          <p>
            That curiosity also inspired our workshops. By sharing the process
            behind soapmaking, we hope to help others better understand the
            products they use every day and experience the satisfaction of making
            something with their own hands.
          </p>
          <p>
            While the products have evolved, the intention remains the same:
            creating practical, purposeful products that fit naturally into
            everyday routines.
          </p>
        </div>
      </section>

      <section className="about-philosophy">
        <p className="about-kicker">Skincare Philosophy</p>
        <blockquote>
          "Treat your skin like your stomach. What we use daily matters, so
          choose ingredients with intention."
        </blockquote>
      </section>

      <section className="about-sustainability about-split-section">
        <div className="about-section-copy">
          <p className="about-kicker">Sustainability</p>
          <h2>Progress over perfection.</h2>
          <p>
            I have felt uneasy about plastic waste since I was young, especially
            after watching documentaries about pollution and seeing how disposable
            plastic is used briefly but remains for generations.
          </p>
          <p>
            At So Hand Made, sustainability is not about being perfect or
            judgmental. It is about small intentional steps: lower-waste
            packaging, practical handmade products, used cooking oil soap, and
            supporting beach clean-up initiatives through SoBeachy.
          </p>
          <blockquote className="about-sustainability-quote">
            "We don't need a handful of people doing zero waste perfectly. We
            need millions of people doing it imperfectly."
            <span>Anne-Marie Bonneau, Zero Waste Chef</span>
          </blockquote>
        </div>

        <div className="about-sustainability-gallery">
          <figure className="about-support-image about-sustainability-image">
            <img src="/Aboutpage/grouppic.jpeg" alt="So Hand Made workshop group" />
          </figure>
          <figure className="about-support-image about-sustainability-image">
            <img src="/Aboutpage/grouppic2.jpeg" alt="So Hand Made group activity" />
          </figure>
        </div>
      </section>

      <section className="about-name-story">
        <div className="about-section-header">
          <div className="about-name-copy">
            <p className="about-kicker">The Name</p>
            <h2>Why So Hand Made?</h2>
            <p>
              The name "So Hand Made" began as something playful, but over time
              it came to represent something more. I've always been drawn to
              handmade things and the stories behind them. The care, patience,
              and creativity that transform raw materials into something
              meaningful. Soapmaking was simply the beginning.
            </p>
          </div>

          <div className="about-name-logos">
            <img className="about-logo-line" src={logoLineB} alt="So Hand Made logo" />
          </div>

          <div className="about-name-copy about-name-copy-full">
            <p>
              The logo carries this story as well. At first glance, it appears
              as a wave, inspired by the ocean and a desire to create with
              greater consideration for the world around us. Look a little
              closer, and hidden within the lines are the letters S, h, and M, a
              subtle nod to So Hand Made. The wave reflects an idea that has
              stayed with me for years: every action creates a ripple. Whether
              it's choosing a handmade product, reducing waste, repurposing used
              cooking oil, or simply being more mindful in daily routines, small
              actions can travel further than we realise.
            </p>
            <p>
              My hope is that one day So Hand Made can become a home for makers
              and creative collaboration, bringing together people who
              appreciate the art of creating with their hands. In a world that
              often moves quickly, making offers an opportunity to slow down,
              reconnect with ourselves, and find meaning in the process.
              Through creating, we cultivate patience, mindfulness, and a deeper
              appreciation for the things we use every day. And perhaps, along
              the way, discover that living a little more sustainably can be
              surprisingly enjoyable too. A place that celebrates not just what
              is made, but the joy of making itself.
            </p>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div>
          <p className="about-kicker">Next</p>
          <h2>A slower way of making.</h2>
          <p>
            Whether you're here to discover a product, learn a new skill, or
            simply find inspiration, we invite you to join a growing community
            that values handmade things, mindful choices, and the stories behind
            them.
          </p>
        </div>

        <div className="about-closing-actions">
          <Link to="/products">Shop Products</Link>
          <Link to="/workshops">Join a Workshop</Link>
          <Link to="/journal">Read the Journal</Link>
        </div>
      </section>
    </main>
  )
}

export default About
