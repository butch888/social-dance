import React from 'react'
import MainImage from './MainImage'
import MainContent from './MainContent'

export default function Main() {
  return (
    <div className='max-w-[1440px] mx-auto pb-[20px]'>
      <div className='max-w-full flex flex-col-reverse mx-auto bg-white'>
          <MainContent />
          <MainImage src='/main.png' alt='main'/>
      </div>
    </div>
  )
}



