import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutme from './Aboutme';
import Cv from './Cv';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { DarkModeProvider } from './DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Cv />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
