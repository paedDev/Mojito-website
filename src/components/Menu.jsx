import React, { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = sliderLists.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
    console.log(currentIndex);

    // let newIndex;
    // if (index < 0) {
    //   newIndex = totalCocktails - 1;
    // } else if (index >= totalCocktails) {
    //   newIndex = 0;
    // } else {
    //   newIndex = index;
    // }
  };
  const getCocktailAt = (indexOfset) => {
    //     let newIndex = currentIndex + indexOffset;
    // if (newIndex < 0) {
    //   newIndex = totalCocktails - 1;
    // } else if (newIndex >= totalCocktails) {
    //   newIndex = 0;
    // }
    // return sliderLists[newIndex];
    return sliderLists[
      (currentIndex + indexOfset + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const PrevCocktail = getCocktailAt(-1);
  const NextCocktail = getCocktailAt(1);
  useGSAP(() => {
    gsap.fromTo(
      "#menu-title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      "#cocktail-img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        duration: 1,
        xPercent: 0,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#sub-title",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        yPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#sub-p",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        yPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative md:px-5 px-0 w-full mx-auto py-20 md:mt-40 mt-0 radial-gradient"
    >
      <img
        src="images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
        className="object-contain absolute left-0 -bottom-20 md:w-fit w-1/3"
      />
      <img
        src="images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
        className="absolute -top-40 right-0 object-contain md:w-fit w-1/3"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav
        className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto"
        aria-label="Cocktail Navigation"
      >
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              } md:text-2xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="flex flex-col justify-between items-center w-[80%] mx-auto relative">
        <div className="flex items-center justify-between w-full absolute">
          <button
            className="text-white hover:text-yellow cursor-pointer transtion-colors max-w-36"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {PrevCocktail.name}
            </span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
              className="md:block hidden"
            />
          </button>

          <button
            className="text-white hover:text-yellow cursor-pointer transtion-colors max-w-36"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {NextCocktail.name}
            </span>
            <img
              className="md:block hidden"
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="flex-center mt-10">
          <img
            id="cocktail-img"
            src={currentCocktail.image}
            className="object-contain h-[50vh]"
          />
        </div>
        <div className="flex md:flex-row flex-col w-full md:items-center justify-between lg:absolute bottom-0">
          <div ref={contentRef} className="space-y-4 md:translate-y-10 mb-5">
            <p className="text-gray-400">Recipe For:</p>
            <p
              className="md:text-4xl text-3xl text-yellow-100 font-modern-negra max-w-40"
              id="menu-title"
            >
              {currentCocktail.name}
            </p>
          </div>
          <div className="space-y-5 md:max-w-lg text-left">
            <h2 className="md:text-3xl text-2xl font-serif" id="sub-title">
              {currentCocktail.title}
            </h2>
            <p className="md:text-md pe-5" id="sub-p">
              {currentCocktail.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

// id: 1,
// name: "Classic Mojito",
// image: "/images/drink1.png",
// title: "Simple Ingredients, Bold Flavor",
// description:
//   "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
