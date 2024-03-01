import About from "../sections/About"
import Contact from "../sections/Contact"
import Education from "../sections/Education"
import Footer from "../sections/Footer"
import Home from "../sections/Home"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import ScrollToAnchor from "../components/ScrollToAnchor";
import MobileNavbar from "../components/MobileNavbar"

const LandingPage = () => {
  return (
    <>  
        <ScrollToAnchor/>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
        <MobileNavbar/>
    </>
  )
}

export default LandingPage