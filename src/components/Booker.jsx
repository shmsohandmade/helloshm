function Booker({ username, eventSlug }) {
  const bookingUrl = `https://cal.com/${username}/${eventSlug}?embed=true&theme=light`

  return (
    <div className="booker-embed">
      <iframe
        src={bookingUrl}
        title="Book workshop"
        loading="lazy"
        allow="payment"
      />
    </div>
  )
}

export default Booker
