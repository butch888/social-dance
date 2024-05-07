'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="overflow-hidden lg:w-[70%] mx-auto lg:my-auto" ref={emblaRef}>
      
      <div className="flex">
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0 relative">
          <img src='main-1.png' className="w-full lg:rounded-2xl" alt='1'/>
          <div className='absolute top-3/4 left-1/2 -translate-x-2/4 text-center text-white tracking-wide'>
            <p className='text-[28px]'>Everywhere Your Are</p>
            <p className='text-[14px] px-[30px] mt-[5px]'>Take classes at your own pace, on your own time, and on any device</p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0 relative">
          <img src='main-2.png' className="w-full lg:rounded-2xl" alt='2'/>
          <div className='absolute top-3/4 left-1/2 -translate-x-2/4 text-center text-white tracking-wide'>
            <p className='text-[28px]'>Stay Inspired</p>
            <p className='text-[14px] px-[30px] mt-[5px]'>Explore hundreds of classes & member-only courses, with new content added monhtly</p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0 relative">
          <img src='main-3.png' className="w-full lg:rounded-2xl" alt='3'/>
          <div className='absolute top-3/4 left-1/2 -translate-x-2/4 text-center text-white tracking-wide'>
            <p className='text-[28px]'>World Class Teaсhers</p>
            <p className='text-[14px] px-[30px] mt-[5px]'>Experience the depth of knowledge from experts across all styles of social dance</p>
          </div>
        </div>
      </div>
    </div>
  )
}
