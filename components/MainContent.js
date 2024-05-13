'use client'
import React, { useState } from 'react'
import Socials from './Socials';

export default function MainContent({modal, setModal}) {

  const [inpValue, setInpValue] = useState('')

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const getModal = (e) => {
    let inp = document.querySelector('input')
    if(isValidEmail(inpValue)) {
      e.preventDefault()
      setModal(true)
      setInpValue('')
    } else {
      e.preventDefault()
      inp.focus()
      setInpValue('')
      !inpValue ? inp.placeholder='your@exapmple.com' : inp.placeholder='enter correct email'
    }
  }

  return (
    <div className='lg:max-w-[330px] mx-[20px] lg:mx-auto'>
      
      <div className='grid grid-cols-2 grid-rows-2 items-center relative mlg:grid-cols-1 mlg:grid-rows-1 mlg:mt-4'>
        <div>
          <img src='/main-logo-dance.png' alt='logo' className='w-[56px] h-[56px]' />
        </div>
        <p className='text-26px font-bold leading-[26px] relative right-20 mlg:hidden'>
          Dance<br/>Network
        </p>
        <p className='font-bold text-38px leading-[38px] pt-3 pb-[5px]
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent absolute top-16 mlg:-top-1 mlg:left-16'>
          Coming Soon
        </p>
      </div>

      <p className='text-[12px] font-normal mt-8'>
        Find bachata, salsa, kizomba and more dance events near you. Expand your dance world with socials, classes and festivals.
      </p>
      
      <p className='text-[14px] font-semibold py-[20px]'>
        Join our waitlist to get early access
      </p>

      <form>
        <label className='text-[12px] font-semibold'>
          Email Addres
          <input type='email' value={inpValue} placeholder='your@exapmple.com' onChange={(e) => setInpValue(e.target.value)}
                className='font-normal text-12px p-[14px] rounded-md bg-gray-100 w-full mt-[5px] mb-[20px]'/>
        </label>
        <button className='text-12px font-semibold bg-customBlue rounded-md py-[14px] w-full text-white tracking-widest'
                onClick={(e) => getModal(e)}>
          GET EARLY ACCESS
        </button>
      </form>
      
      <p className='text-10px font-normal text-gray-500 tracking-wide drop-shadow-xl mt-[20px] mb-[5px]'>
        by submitting your email, agree to recieve email marketing from Social Dance TV. You can unsubscribe anytime.
      </p>
      <div className='flex items-center gap-2 mb-[10px] lg:mb-0'>
        <img src='/forbs.png' alt='forbs' className='block w-[85px]'/>
        <img src='/yahoo.png' alt='yahoo' className='block w-[125px] pt-[10px]'/>
      </div>
      <div className='border-b w-full lg:hidden mb-[20px]'></div>
      <div className='lg:hidden'>
        <Socials />
      </div>
      <div className='border-b w-full lg:hidden mt-[20px] lg:hidden'></div>
    </div>
  )
}
