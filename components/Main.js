import React from 'react'
import { EmblaCarousel } from './EmblaCarousel'
import MainContent from './MainContent'
import Modal from './Modal'

export default function Main({modal, setModal}) {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1260px] grid grid-cols-1 lg:grid-cols-2 mt-[60px] lg:mt-[100px] mx-[40px] bg-white lg:rounded-2xl '>
        <div>
          <MainContent modal={modal} setModal={setModal}/>
        </div>
        <div>
          <EmblaCarousel />
        </div>
      </div>
      {modal&&<Modal setModal={setModal}/>}
    </div>
    
  )
}
