import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const ref = useRef();
  useGSAP(() => {}, []);
  return <div className="text-4xl flex-center h-[300vh]">App</div>;
};

export default App;
