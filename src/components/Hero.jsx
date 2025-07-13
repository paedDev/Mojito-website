import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
      .to('#right-leaf', {
        y: 200
      }, 0)
      .to('#left-leaf', {
        y: -200
      }, 0);

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% center' : 'bottom top';
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id='hero' className='noisy' >
        <h1 id='title' className='md:mt-32 mt-40 text-7xl md:text-[18vw] leading-none text-center font-modern-negra'> MOJITO</h1>
        <img src="/images/left-leaf.png" alt="left-leaf" id='left-leaf' className=' absolute left-0 md:top-20 xl:top-36 2xl:top-45 md:bottom-auto -bottom-20 md:w-fit w-1/3' />
        <img src="/images/right-leaf.png" alt="left-leaf" id='right-leaf' className=' absolute right-0  xl:top-10 2xl:top-0 top-1/3 md:bottom-auto -bottom-20 md:w-fit w-1/3' />

        <div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-10 top-auto md:top-[30vh] flex justify-between items-end px-10'>
          <div className='flex lg:flex-row flex-col  gap-10 justify-between items-center lg:items-end mx-auto w-[90%]'>
            <div className='space-y-5 hidden md:block w-full'>
              <p className='lg:text-start text-center'>Cool. Crisp. Classic.</p>
              <p id='subtitle' className='font-modern-negra text-2xl text-yellow max-w-lg font-bold'>Sip the Spirit <br />   of Summer</p>
            </div>
            <div className='space-y-4 text-md  md:max-w-xs w-full px-4'>
              <p id='subtitle' className='text-left'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
              <a href="" className='font-semibold opacity-80 lg:text-start text-center hover:text-yellow'>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className='video w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 flex items-center justify-center'>
        <video
          className='absolute bottom-0 w-full h-full md:object-contain object-bottom object-cover'
          id='hero-video'
          src="/videos/output.mp4"
          ref={videoRef}
          muted
          playsInline
          preload='auto' />
      </div>
    </>
  );
};

export default Hero;