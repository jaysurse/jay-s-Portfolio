import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShimmerText from "./components/ShimmerText"; // custom loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ShimmerText />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
