import React from 'react'
import MainImage from './MainImage'
import MainContent from './MainContent'

export default function Main() {
  return (
    <div className='max-w-[1440px] mx-auto bg-gray-100 pt-[25px] pb-[30px]'>
      <div className='max-w-[1260px] flex justify-between mx-auto bg-white rounded-lg'>
          <MainContent />
          <MainImage src='/main.png' alt='main'/>
      </div>
    </div>
  )
}



