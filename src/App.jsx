import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Stats from "./components/Stats";
function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;