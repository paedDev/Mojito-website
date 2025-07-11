import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('#title', {
      type: 'chars,words'
    });
    const paragraphSplit = new SplitText('#subtitle', {
      type: 'lines'
    });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    });
  }, []);
  return (
    <>
      <section id='hero' className='' >
        <h1 id='title' className='md:mt-32 mt-40 text-7xl md:text-[18vw] leading-none text-center font-modern-negra'> MOJITO</h1>
        <img src="/images/left-leaf.png" alt="left-leaf" className='absolute left-0 md:top-20 xl:top-36 2xl:top-45 md:bottom-auto -bottom-20 md:w-fit w-1/3' />
        <img src="/images/right-leaf.png" alt="left-leaf" className='absolute right-0  xl:top-10 2xl:top-0 top-1/3 md:bottom-auto -bottom-20 md:w-fit w-1/3' />

        <div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-10 top-auto md:top-[30vh] flex justify-between items-end px-10'>
          <div className='flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto'>
            <div className='space-y-5 hidden md:block w-full'>
              <p className='lg:text-start text-center'>Cool. Crisp. Classic.</p>
              <p id='subtitle' className='font-modern-negra text-2xl text-yellow max-w-lg font-bold'>Sip the Spirit <br />   of Summer</p>
            </div>
            <div className='hidden md:block space-y-4 text-md  md:max-w-xs w-full px-4'>
              <p id='subtitle' className='text-left'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
              <a href="" className='font-semibold opacity-80 lg:text-start text-center hover:text-yellow'>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;