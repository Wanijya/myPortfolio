import { useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Refresh ScrollTrigger after loader finishes and content mounts.
    // Slightly longer delay to account for lazy-loaded sections.
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <Navbar />
      <main>
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Work />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </>
  );
};

export default App;
