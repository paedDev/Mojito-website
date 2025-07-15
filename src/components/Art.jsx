import React from 'react';
import { goodLists, featureLists } from '../../constants';
const Art = () => {
  return (
    <div className=' flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient' id='art'>
      <div className='  w-[80%] mx-auto h-full '>
        <h2 className='font-modern-negra text-[15vw] text-[#404448] text-center leading-none mb-10'>THE ART</h2>

        <div className='flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10 '>
          <ul className='space-y-4 '>
            {
              goodLists.map((feature, index) => (
                <li className='flex items-center space-x-4 justify-start gap-2' key={index}>
                  <img src="/images/check.png" alt="check" />
                  <p className=''>{feature}</p>
                </li>

              ))
            }
          </ul>

          <div className='md:w-[60vw] md:h[70vh] w-full h-full overflow-hidden absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl '>
            <img src="/images/under-img.png" alt=""
              className='object-contain masked-img size-full
              ' />
          </div>


          <ul className='space-y-4 '>
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
      </div>
    </div >
  );
};

export default Art;