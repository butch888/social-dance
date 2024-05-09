import React from 'react'
import { EmblaCarousel } from './EmblaCarousel'
import MainContent from './MainContent'
import Modal from './Modal'
import { MainCarousel } from './EmblaCarousel/MainCarousel'

const slides = [
  {
    title: 'main-1.png',
    image: 'main-1.png'
  },
  {
    title: 'main-2.png',
    image: 'main-2.png'
  },
  {
    title: 'main-3.png',
    image: 'main-3.png'
  }

]

export default function Main({modal, setModal}) {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1260px] flex flex-col-reverse lg:grid lg:items-center lg:grid-cols-2 mt-[60px] lg:mt-[100px] lg:mx-[40px] bg-white lg:rounded-2xl '>
        <div>
          <MainContent modal={modal} setModal={setModal}/>
        </div>
        <div>
          <MainCarousel slides={slides}/>
        </div>
      </div>
      {modal&&<Modal setModal={setModal}/>}
    </div>
    
  )
}
