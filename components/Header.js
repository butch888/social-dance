import React from 'react'
import ImageLogo from './ImageLogo'
import SocialsHeader from './SocialsHeader'

export default function Header() {
  return (
    <header className='w-full bg-white fixed top-0 left-0 z-10'>
      <div className='flex justify-center items-center p-[20px] lg:justify-between '>
        <ImageLogo src='/logo-desc.png' alt='logo'/>
        <SocialsHeader/>
      </div>
    </header>
  )
}
