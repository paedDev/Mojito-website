import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Preloader = () => {
  const videoRef = useRef(null);
  const textRef = useRef([]);
  const logoRef = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      "#left-leaf",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "back.in",
        rotation: "0",
        duration: 0.5,
      }
    );
    timeline.fromTo(
      "#right-leaf",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "back.in",
        rotation: "0",
        duration: 0.5,
      }
    );
    if (videoRef.current) {
      videoRef.current.playbackRate = 10;

      timeline.fromTo(
        videoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.5,
        x: 300,
        rotation: "360deg",
      });
      // text hidden first
      gsap.set(textRef.current, {
        opacity: 0,
        x: 200,
        scale: 0.5,
      });
      const handleVideoEnd = () => {
        gsap.to(logoRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "circ.in",
          rotation: 0,
        });
        gsap.to(textRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out",
          stagger: "0.06",
          delay: 0.5,
        });
      };

      videoRef.current.addEventListener("ended", handleVideoEnd);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("ended", handleVideoEnd);
        }
      };
    }
  }, []);
  const text = "Velvet Pour.";
  return (
    <div className="max-w-7xl mx-auto h-screen p-6 overflow-hidden ">
      <div className="h-full flex justify-center items-center space-x-4 w-3/4 mx-auto  ">
        <img
          src="images/left-leaf.png"
          alt="left-leaf"
          id="left-leaf"
          className="absolute  left-0  w-1/3 lg:top-50 md:top-20 md:bottom-auto -bottom-20 md:w-auto"
        />

        <img
          src="images/right-leaf.png"
          alt="right-leaf"
          id="right-leaf"
          className="absolute top-0 right-0 md:w-fit w-1/3 lg:top-10 md:top-15 md:bottom-auto -bottom-20"
        />
        <div className="w-1/2">
          <video
            ref={videoRef}
            className="h-full"
            src="/videos/preload.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>
        <div id="" className="flex items-center space-y-4 flex-col w-1/2 ">
          <h2
            ref={logoRef}
            className="font-stylish text-4xl bg-gradient-to-r from-gray-300 to-gray-600 w-20 h-20 rounded-full flex items-center justify-center "
          >
            M
          </h2>
          <div className="flex items-center justify-center space-x-4">
            {text.split("").map((letter, index) => (
              <div
                key={index}
                className="flex justify-center items-center lg:text-7xl text-4xl font-bold font-modern-negra"
                ref={(el) => (textRef.current[index] = el)}
              >
                <h1
                  className={`preload-h1 ${index === 0 ? "font-stylish" : ""}`}
                >
                  {letter}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
