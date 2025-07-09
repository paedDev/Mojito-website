import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const ref = useRef();
  useGSAP(() => { }, []);
  return <main className="w-full overflow-x-hidden">
    <Navbar />
  </main>;
};

export default App;
