import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }

      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    })
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToHash
