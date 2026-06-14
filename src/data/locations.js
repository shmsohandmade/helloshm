export const locationCategories = [
  "Refill Station",
  "Recycling Collection",
  "Share Your Bags",
  "Bulk Store",
  "Secondhand / Thrift",
  "Repair Service",
  "Compost / Food Waste",
  "Sustainable Café",
  "Community Initiative",
  "Interesting Finds"
]

// latitude and longitude control where the pin appears on the OpenStreetMap map.
// Optional: add image: "/your-folder/photo.jpg" to show a picture in the expanded card.
export const locations = [
  {
    id: "sunway-velocity-share-your-bags",
    name: "Sunway Velocity",
    category: "Share Your Bags",
    address: "Lingkaran SV, Sunway Velocity, 55100 Kuala Lumpur, Malaysia",
    operatingHours: "10am-10pm daily",
    contributor: "Charleen",
    description: "Community bag-sharing station to reduce single-use bag usage.",
    image: "/ConsciousMap/sharebag_sunwayvelocity.jpg",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Lingkaran%20SV%2C%20Sunway%20Velocity%2C%2055100%20Kuala%20Lumpur%2C%20Malaysia",
    latitude: 3.1279,
    longitude: 101.7248,
    addedAt: "2026-06-12"
  },
  {
    id: "surau-an-naim-taman-idaman-refill-station",
    name: "Surau An-Naim Taman Idaman Serendah",
    category: "Refill Station",
    address: "27, Jalan Mawar, Taman Idaman, 48200 Serendah, Selangor",
    operatingHours: "24/7",
    contributor: "Kim",
    description: "Bring your own containers to refill drinking water and laundry liquid.",
    image: "/ConsciousMap/refillstation_surauannaimtamanidaman.JPEG",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=27%2C%20Jalan%20Mawar%2C%20Taman%20Idaman%2C%2048200%20Serendah%2C%20Selangor",
    latitude: 3.3566,
    longitude: 101.6097,
    addedAt: "2026-06-13"
  }
]
