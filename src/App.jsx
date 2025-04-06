import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default App;
