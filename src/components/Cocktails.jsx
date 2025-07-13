import React from 'react';
import { cocktailLists, mockTailLists } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true
      }
    });
    parallaxTimeline
      .from('#c-left-leaf', {
        opacity: 0,
        x: -100,
        y: 100
      })
      .from('#c-right-leaf', {

        x: 100,
        y: 100
      });
  }, []);
  return (
    <section className='noisy relative min-h-dvh w-full overflow-hidden' id='cocktails'>
      <img src="images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' className='absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3' />
      <img src="images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' className='absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3' />

      <div className='w-[80%] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-20 pt-30 lg:px-0 '>
        <div className='space-y-8 w-full md:w-fit'>
          <h2 className='text-xl font-medium'>Most popular cocktails:</h2>
          <ul className='space-y-5'>
            {
              cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name} className='flex justify-between items-start'>
                  <div className='md:me-28'>
                    <h3 className='font-modern-negra lg:text-xl text-lg text-yellow'>{name}</h3>
                    <p className='text-sm'>{country} | {detail}</p>
                  </div>
                  <span className='text-xl font-medium'>- {price}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='space-y-8 w-full md:w-fit'>
          <h2 className='text-xl font-medium'>Most loved mocktails:</h2>
          <ul className='space-y-5'>
            {
              mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name} className='flex justify-between items-start'>
                  <div className='me-28'>
                    <h3 className='font-modern-negra lg:text-xl text-lg text-yellow'>{name}</h3>
                    <p>{country} | {detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section >
  );
};

export default Cocktails;