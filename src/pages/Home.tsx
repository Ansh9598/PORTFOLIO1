import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Achievements from '../sections/Achievements';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
