import './App.scss';
import Navbar from './Components/Navbar/index'
import Home from './Components/Home/index'
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
