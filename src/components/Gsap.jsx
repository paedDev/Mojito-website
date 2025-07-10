import React from 'react';
import gsap from 'gsap';
const Gsap = () => {
  const timeline = gsap.timeline();
  timeline.fromTo('#h1', {
    opacity: 0,
    y: 40,
    scale: 0.8
  }, {
    opacity: 1, y: 0, duration: 0.6, ease: 'back.inOut', scale: 1
  });
  timeline.fromTo('#p1', {
    opacity: 0,
    y: 40
  }, {
    opacity: 1, y: 0, duration: 0.6, ease: 'back.out',
    stagger: 0.4
  });
  timeline.fromTo('#p2', {
    opacity: 0,
    y: 40
  }, {
    opacity: 1, y: 0, duration: 0.7, ease: 'back.inOut',
    stagger: 0.4
  });
  timeline.fromTo('#btn', {
    x: -100,
    opacity: 0,
    scale: 0.8

  }, {
    x: 0,
    opacity: 1,
    scale: 1, duration: 0.5,
    ease: 'power1.inOut'
  });

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center  flex-col  h-screen  space-y-6 p-6'>
        <h1 id='h1' className='text-6xl'>Welcome</h1>
        <div>
          <p id='p1'>Hello World</p>
        </div>
        <div>
          <p id='p2'>Have a great day!</p>
        </div>
        <div>

          <button id='btn' className='px-4 py-2  rounded-xl shadow-2xl text-base overflow-hidden relative group border-2 border-emerald-400 '>
            <span className='absolute top-0 left-0 w-0 h-0 group-hover:w-full group-hover:h-full group-hover:bg-emerald-400 duration-500'></span>
            <span className='relative z-10 w-full'>Hello</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gsap;