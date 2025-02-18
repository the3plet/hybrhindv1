import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import IconScroll from "./components/IconScroll"
import { Navbar } from "./components/Navbar"
import Products from "./components/Products"
import Services from "./components/Services"
import TextScroll from "./components/TextScroll"


function App() {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <IconScroll/>
     <Services/>
     <TextScroll/>
     <Products/>
     <AboutUs/>
     <Footer/>
    </div>
  )
}

export default App
