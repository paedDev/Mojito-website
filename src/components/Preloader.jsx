import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Preloader = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline();

    if (videoRef.current) {
      videoRef.current.playbackRate = 10;
      timeline.fromTo(videoRef.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      });
    }
  }, []);
  const text = 'MOJITO.';
  return (
    <div className='max-w-7xl mx-auto h-screen p-6 overflow-hidden'>
      <div className='h-full flex justify-center items-center space-x-4 w-3/4 mx-auto'>

        <div>

          <video ref={videoRef}
            src="/videos/preload.mp4"
            autoPlay
            muted
            playsInline />
        </div>
        {
          text.split('').map((letter, index) => (
            <div key={index} className='flex justify-center items-center text-7xl font-bold font-modern-negra'>
              <h1 className='preload-h1'>{letter}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Preloader;