import React from "react";
import navLinks from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
navLinks;
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        background: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",

      }
    );
  }, []);
  return (
    <nav className="z-50 w-full fixed">
      <div className="flex md:flex-row flex-col items-center md:justify-between gap-5 py-5 lg:px-0 px-5 max-w-7xl  mx-auto">
        <a href="#home" className="flex items-center gap-2 ">
          <img src="/images/logo.png" alt="" />
          <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
        </a>

        <ul className="flex-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer text-nowrap md:text-base text-sm"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
