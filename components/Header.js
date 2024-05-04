import React from 'react'
import ImageLogo from './ImageLogo'
import Socials from './Socials'

export default function Header() {
  return (
    <div className='max-w-[1440px] px-[22px] py-[22px] flex justify-center '>
      <ImageLogo src='/logo-desc.png' alt='logo'/>
    </div>
  )
}
