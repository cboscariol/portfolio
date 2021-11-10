import './App.scss';
import Navbar from './Components/Navbar/index'
import Home from './Components/Home/index'
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
