import ImpactSection from "../components/ImpactSection"

function Impact() {
  return (
    <>
      <section style={{ padding: "120px 40px 40px", background: "var(--color-bg)" }}>
        <p style={{ color: "var(--color-primary)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "13px" }}>
          Our Impact
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", maxWidth: "850px" }}>
          Tracking small changes that add up over time.
        </h1>
      </section>

      <ImpactSection />

      <section style={{ padding: "60px 40px 100px", background: "var(--color-bg)", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px" }}>
          How we calculate our numbers
        </h2>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--color-muted)" }}>
          Our impact numbers are based on internal tracking. Plastic packaging avoided is estimated using 5g of plastic packaging per soap bar.
        </p>
      </section>
    </>
  )
}

export default Impact
