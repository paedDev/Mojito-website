import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Gsap from "./components/gsap";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const timer = setTimeout(() => setLoading(false), 6000);
    // return () => clearTimeout(timer);
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

      </main >
  );
};

export default App;
