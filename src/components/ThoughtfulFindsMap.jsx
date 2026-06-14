import { useEffect } from "react"
import { divIcon } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const malaysiaCenter = [4.2105, 108.9758]

const pinIcon = divIcon({
  className: "thoughtful-leaflet-pin",
  html: "<span></span>",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -14]
})

function SelectedLocationFocus({ selectedLocation }) {
  const map = useMap()

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.latitude, selectedLocation.longitude], 9, {
        duration: 0.8
      })
    }
  }, [map, selectedLocation])

  return null
}

function ThoughtfulFindsMap({ locations, selectedLocation, onSelectLocation }) {
  return (
    <MapContainer
      center={malaysiaCenter}
      zoom={6}
      minZoom={5}
      scrollWheelZoom
      className="thoughtful-leaflet-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <SelectedLocationFocus selectedLocation={selectedLocation} />

      {locations.map((location) => (
        <Marker
          eventHandlers={{
            click: () => onSelectLocation(location.id)
          }}
          icon={pinIcon}
          key={location.id}
          position={[location.latitude, location.longitude]}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.category}
            <br />
            <a href={location.googleMapsLink} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default ThoughtfulFindsMap
