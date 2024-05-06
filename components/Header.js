import React from 'react'
import ImageLogo from './ImageLogo'
import SocialsHeader from './SocialsHeader'

export default function Header() {
  return (
    <div className='max-w-[1440px] mx-auto px-[22px] py-[22px] flex justify-center items-center lg:justify-between bg-white'>
      <ImageLogo src='/logo-desc.png' alt='logo'/>
      <SocialsHeader/>
    </div>
  )
}
