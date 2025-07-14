import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Gsap from "./components/gsap";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);
  useGSAP(() => {
    gsap.fromTo('main', {
      opacity: 0,
    }
      , {
        ease: 'sine.in',
        duration: 1,
        opacity: 1,
      });
  }, [loading]);
  return (
    loading ? (
      <Preloader />
    ) :
      <main id="main" className="w-full overflow-x-hidden" >
        <Navbar />
        <Hero />
        <Cocktails />
        <About />


      </main >
  );
};

export default App;
