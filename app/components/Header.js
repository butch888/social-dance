import React from 'react'
import ImageLogo from './ImageLogo'

export default function Header() {
  return (
    <div className='max-w-[1440px] px-[22px] py-[22px] flex justify-between'>

      <ImageLogo src='/logo-desc.png' alt='logo'/>

      <div className='flex gap-8'>
        <img src='/insta.png' alt='insta' className="block cursor-pointer"/>
        <img src='/youtube.png' alt='insta' className="cursor-pointer"/>
        <img src='/fb.png' alt='insta' className="cursor-pointer"/>
      </div>

    </div>
  )
}
