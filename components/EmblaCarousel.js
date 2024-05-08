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
    <div className="overflow-hidden lg:rounded-2xl" ref={emblaRef}>
      
      <div className="flex">

        <div className="flex-shrink-0 w-full lg:rounded-2xl">
          <img src='main-1.png' className="w-full " alt='1'/>
        </div>
        
        <div className="flex-shrink-0 w-full min-w-0 relative">
          <img src='main-2.png' className="w-full" alt='2'/>
        </div>

        <div className="flex-shrink-0 w-full min-w-0 relative">
          <img src='main-3.png' className="w-full" alt='3'/>
        </div>
      </div>
    </div>
  )
}
//Describe for carousel img
{/* <div className='absolute top-3/4 left-1/2 -translate-x-2/4 text-center text-white tracking-wide msm:hidden'>
            <p className='text-[28px]'>Everywhere Your Are</p>
            <p className='text-[14px] px-[30px] mt-[5px]'>Take classes at your own pace, on your own time, and on any device</p>
          </div> */}