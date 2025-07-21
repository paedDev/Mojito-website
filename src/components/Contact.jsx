import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Schedule } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Contact = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 5%",
        scrub: true,
      },
    });
    timeline.to("#f-right-leaf", {
      opacity: 0,
      x: 200,
      y: -200,
    });
    timeline.to("#f-left-leaf", {
      opacity: 0,
      x: 200,
      y: -200,
    });
  }, []);
  return (
    <footer
      id="contact"
      className="w-full min-h-screen md:px-5 px-0 relative mt-20 flex items-center justify-center radial"
    >
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        className="absolute top-0 right-0 md:w-fit w-1/3"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-right"
        id="f-left-leaf"
        className="absolute bottom-0 left-0 md:w-fit w-1/3"
      />
      <img
        src="/images/footer-drinks.png"
        alt="drinks"
        className="absolute bottom-0 right-0 md:top-auto w-1/3 md:w-fit"
      />
      <div className="flex items-center flex-col justify-center h-full w-[80%] mx-auto md:space-y-10 space-y-6 text-center mt-40">
        <h2 className="font-modern-negra md:text-5xl text-3xl font-medium tracking-wider">
          Where to Find Us
        </h2>
        {/* visit our store */}
        <div className="text-gray-200 space-y-2 ">
          <h2 className="uppercase text-sm">Visit Our Store</h2>
          <p className="text-xl">456, Raq Blvd. #404, Los Angelas, Ca 90210</p>
        </div>
        {/* Contact information */}
        <div className="space-y-4 text-gray-200">
          <h2 className="uppercase text-sm">Contact Us</h2>
          <div className="text-xl">
            <h2>(555) 987-6543</h2>
            <p>hello@jsmcocktail.com</p>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-sm mb-4">Open Every Day</h2>
          {Schedule.map((sched, index) => (
            <div key={index} className=" text-lg ">
              <h2>
                {sched.name} : <span>{sched.time}</span>
              </h2>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h1>Socials</h1>
          <div className="flex items-center justify-center space-x-4 text-2xl">
            <FaFacebook />
            <FaXTwitter />
            <CiInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
