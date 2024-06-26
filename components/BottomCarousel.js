'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function BottomCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="box-border overflow-hidden mx-[18px] my-[10px] p-[5px] px-2 bg-white lg:rounded-2xl" ref={emblaRef}>
      
      <div className="flex justify-between items-center gap-1.5">

        <div className="flex-shrink-0 max-w-[296px] min-w-0 relative cursor-pointer 
                        border-4 rounded-lg border-[#615EFF]/[0] hover:border-[#615EFF]/[1]">
          <img src='Guide.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-semibold text-18px'>Guide</p>
            <p className='font-semibold text-12px w-[137px]'>How to go to a festival and be satisfied</p>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[296px] min-w-0 relative cursor-pointer
                        border-4 rounded-lg border-[#615EFF]/[0] hover:border-[#615EFF]/[1]">
          <img src='Event.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-semibold text-18px'>Best Event</p>
            <p className='font-semibold text-12px'>Trip calculator</p>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[296px] min-w-0 relative 
                        border-4 rounded-lg border-[#615EFF]/[0] hover:border-[#615EFF]/[1]">
          <img src='Merch.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-semibold text-18px'>Merch</p>
            <button className='bg-white px-[12px] py-[4px] rounded-full text-[12px] tracking-widest font-bold cursor-pointer'>
              SHOP NOW
            </button>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[296px] min-w-0 relative 
                        border-4 rounded-lg border-[#615EFF]/[0] hover:border-[#615EFF]/[1]">
          <img src='Festival.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-semibold text-18px'>Festival video</p>
            <button className='bg-white px-[12px] py-[4px] rounded-full text-[12px] font-semibold cursor-pointer'>
            BUY VIDEO
            </button>
          </div> 
        </div>

        <div className="flex-shrink-0 max-w-[296px] min-w-0 mr-1 relative 
                        border-4 rounded-lg border-[#615EFF]/[0] hover:border-[#615EFF]/[1]">
          <img src='Videographer.png' className="w-full object-cover" alt='1'/>
          <div className='absolute top-1/2 left-[40%] transform -translate-y-1/2'>
            <p className='font-semibold text-18px'>Videographer</p>
            <button className='bg-white px-[12px] py-[4px] rounded-full text-[12px] font-semibold cursor-pointer'>
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

<iframe title="YouTube video player" class="youtube-player" allowfullscreen="" type="text/html" data-defer-load="Youtube" data-src="//www.youtube.com/embed/hrQBW7gif_4?controls=1" frameborder="0"></iframe>