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
    <div className="overflow-hidden lg:rounded-2xl mx-[37px] my-[10px] p-[15px] pr-1 bg-white" ref={emblaRef}>
      
      <div className="flex flex justify-between items-center gap-2">

        <div className="flex-shrink-0 max-w-[250px] min-w-0 relative cursor-pointer">
          <img src='Guide.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-extrabold text-18px'>Guide</p>
            <p className='text-14px leading-tight'>How to go to a festival and be satisfied</p>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[250px] min-w-0 relative cursor-pointer">
          <img src='Event.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-extrabold text-18px'>Best Event</p>
            <p className='text-14px leading-tight'>Trip calculator</p>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[250px] min-w-0 relative">
          <img src='Merch.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-extrabold text-18px'>Merch</p>
            <button className='bg-white p-[7px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
              SHOP NOW
            </button>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[250px] min-w-0 relative">
          <img src='Festival.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-extrabold text-18px'>Festival video</p>
            <button className='bg-white p-[7px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
            BUY VIDEO
            </button>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[250px] min-w-0 mr-2 relative">
          <img src='Videographer.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-extrabold text-18px'>Videographer</p>
            <button className='bg-white p-[7px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
            HIRE
            </button>
          </div> 
        </div>
      </div>
    </div>
  )
}

{/* <div className='absolute top-3/4 left-1/2 -translate-x-2/4 text-center text-white tracking-wide msm:hidden'>
  <p className='text-[28px]'>Everywhere Your Are</p>
  <p className='text-[14px] px-[30px] mt-[5px]'>Take classes at your own pace, on your own time, and on any device</p>
</div> */}