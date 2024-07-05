import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import NavBar from "../Components/nav/NavBar.jsx";

function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </>
  );
}

export default App;
