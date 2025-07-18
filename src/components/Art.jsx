import React from 'react';
import { goodLists, featureLists } from '../../constants';
import useMediaQuery from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';
    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      }
    });
    maskTimeLine
      .to('.will-fade', {
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.inOut'
      })
      .to('.masked-img', {
        scale: 1.3,
        maskSize: '400%',
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      });
  }, []);
  return (
    <div className=' flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient' id='art'>
      <div className='  w-[80%] mx-auto h-full '>
        <h2 className='will-fade font-modern-negra text-[15vw] text-[#404448] text-center leading-none mb-10'>THE ART</h2>

        <div className='flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10 '>
          <ul className='space-y-4 will-fade '>
            {
              goodLists.map((feature, index) => (
                <li className='flex items-center space-x-4 justify-start gap-2' key={index}>
                  <img src="/images/check.png" alt="check" />
                  <p className=''>{feature}</p>
                </li>

              ))
            }
          </ul>

          <div id='masked.img' className='md:w-[60vw] md:h[70vh] size-full overflow-hidden absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl  '>
            <img src="/images/under-img.png" alt=""
              className=' absolute top-0 md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain masked-img size-full
              ' />
          </div>


          <ul className='space-y-4 will-fade'>
            {
              featureLists.map((feature, index) => (
                <li className='flex items-center space-x-4 justify-start gap-2'>
                  <img src="/images/check.png" alt="check" />
                  <p >{feature}</p>
                </li>
              ))
            }

          </ul>
        </div>
        <div className=''  >
          <h2 className='will-fade text-4xl font-modern-negra text-center text-white mt-40 mb-5'>Sip-Worthy Perfection</h2>
          <div id='masked-content' className=' opacity-0 md:px-0 px-5 space-y-2 absolute md:-bottom-0.5 bottom-52 left-1/2 -translate-x-1/2'>
            <h3 className='md:text-4xl text-2xl text-center font-serif md:w-full w-80 text-white'>Made with Craft, Poured with Passion</h3>
            <p className='text-md text-center'>This isn't just a drink. It's a carefully crafted moment made just for you</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Art;