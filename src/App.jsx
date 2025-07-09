import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technology from "./components/Technology"


const App = () => {
  return (
   <div>
         <Navbar/>
         <Home/>
         <About/>
         <Technology/>
         <Experience/>
         <Projects/>
         <Contact/>
         <Footer/>
        
      
   </div>
  )
}

export default App