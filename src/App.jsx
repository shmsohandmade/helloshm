import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Journal from "./pages/Journal"
import JournalPost from "./pages/JournalPost"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import WorkshopsPage from "./pages/WorkshopsPage"
import WorkshopDetail from "./pages/WorkshopDetail"
import Impact from "./pages/Impact"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import ThoughtfulFinds from "./pages/ThoughtfulFinds"
import ScrollToHash from "./components/ScrollToHash"


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <ScrollToHash />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:slug" element={<ProductDetail />} />

        <Route path="/workshops" element={<WorkshopsPage />} />

        <Route path="/workshops/:slug" element={<WorkshopDetail />} />

        <Route path="/impact" element={<Impact />} />

        <Route path="/journal" element={<Journal />} />

        <Route path="/journal/:slug" element={<JournalPost />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/thoughtful-finds" element={<ThoughtfulFinds />} />
        

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
