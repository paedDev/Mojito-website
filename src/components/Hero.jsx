import React from 'react';

const Hero = () => {
  return (
    <>
      <section id='hero' className='' >
        <h1 className='md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra'> MOJITO</h1>

        <img src="/images/left-leaf.png" alt="left-leaf" className='absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3' />
        <img src="/images/right-leaf.png" alt="left-leaf" className='absolute right-0  xl:top-10 2xl:top-0 top-1/3 md:bottom-auto -bottom-20 md:w-fit w-1/3' />
      </section>
    </>
  );
};

export default Hero;