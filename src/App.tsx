import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import SocialButtons from './components/ui/SocialButtons';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Projects />
        <Certifications />
        <Contact />
        <SocialButtons />
      </Layout>
    </ThemeProvider>
  );
}

export default App;