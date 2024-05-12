import React from 'react'
import { BottomCarousel } from './BottomCarousel'
import MainContent from './MainContent'
import Modal from './Modal'
import { MainCarousel } from './MainCarousel/MainCarousel'

const slides = [
  {
    title: 'main-1.png',
    image: 'main-1.png',
    ttl: 'Everywhere You Are',
    desc: 'Take classes at your own pace, on your own time, and on any device'
  },
  {
    title: 'main-2.png',
    image: 'main-2.png',
    ttl: 'Stay Inspired',
    desc: 'Explore hundreds of classes & member-only courses, with new content added monhtly'
  },
  {
    title: 'main-3.png',
    image: 'main-3.png',
    ttl: 'World Class Teaсhers',
    desc: 'Experience the depth of knowledge from experts across all styles of social dance'
  }
]

export default function Main({modal, setModal}) {
  return (
    <div className='max-w-[1260px] mx-auto'>
      <div className='max-w-[1260px] flex flex-col-reverse lg:grid lg:items-center lg:grid-cols-2 mt-[60px] lg:mt-[100px] lg:mx-[20px] bg-white lg:rounded-2xl '>
        <div>
          <MainContent modal={modal} setModal={setModal}/>
        </div>
        <div>
          <MainCarousel slides={slides}/>
        </div>
      </div>
      {modal&&<Modal setModal={setModal}/>}
      <BottomCarousel />
    </div>
    
  )
}
