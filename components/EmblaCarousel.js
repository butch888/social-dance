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
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0">
          <img src='main-1.png' className="w-full lg:rounded-2xl" alt='1'/>
        </div>
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0">
          <img src='main-2.png' className="w-full lg:rounded-2xl" alt='2'/>
        </div>
        <div className="flex-shrink-0 flex-grow-1 w-full min-w-0">
          <img src='main-3.png' className="w-full lg:rounded-2xl" alt='3'/>
        </div>
      </div>
    </div>
  )
}
