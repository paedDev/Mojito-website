import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
const About = () => {
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words'
    });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        end: 'bottom bottom'
      }
    });
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
      })
      .from('#top-grid', {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.inOut',
        stagger: 0.04
      })
      .from('#bottom-grid', {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: 0.04
      });

  }, []);
  return (
    <div className='min-h-screen py-28 lg:px-0 px-5 w-[80%] mx-auto ' id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <div className='md:col-span-8'>
            <p className='px-4 py-2  bg-white inline-block text-black rounded-full mb-4 text-sm font-medium'>Best Cocktails</p>
            <h2 className='text-3xl md:text-4xl font-modern-negra max-w-lg'>Where every details matters <span>-</span> from muddle to garnish</h2>
          </div>
          <div className='md:col-span-4 space-y-5 flex flex-col justify-between'>
            <p className='text-md'>
              Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
            </p>
            <div className='flex flex-col justify-between md:gap-2 gap-5'>
              <p className='md:text-2xl text-xl font-bold'>
                <span className='text-yellow font-bold text-4xl'>4.5</span>
              </p>
              <p className='text-sm text-white-100'>
                More than +12000 customer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 md:px-0 px-5' id='top-grid'>
        <div className='rounded-3xl overflow-hidden h-52 relative md:col-span-3'>
          <div className='noisy'>
            {/* img1 */}
            <img src="images/about1.png" alt="about image" className='object-cover w-full h-full' />
          </div>
        </div>
        <div className=' rounded-3xl overflow-hidden h-52 relative md:col-span-3'>
          <div className='noisy'>
            {/* img2 */}
            <img src="images/about6.png" alt="about image" className='object-cover  w-full h-full' />
          </div>
        </div>
        <div className=' rounded-3xl overflow-hidden h-52 relative md:col-span-6'>
          <div className='noisy'>
            {/* img3 */}
            <img src="images/about3.png" alt="about image" className='object-cover w-full h-full' />
          </div>
        </div>
      </div>


      <div className='grid md:grid-cols-12 grid-cols-1 gap-5 md:px-0 px-5  ' id='bottom-grid'>
        <div className=' rounded-3xl overflow-hidden h-52 relative md:col-span-8'>
          <div className='noisy'>
            {/* img4 */}
            <img src="images/about4.png" alt="about image" className='object-cover w-full h-full' />
          </div>
        </div>
        <div className=' rounded-3xl overflow-hidden h-52 relative md:col-span-4'>
          <div className='noisy'>
            {/* img5 */}
            <img src="images/about5.png" alt="about image" className='object-cover w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;