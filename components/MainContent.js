'use client'
import React, { useState } from 'react'

export default function MainContent({modal, setModal}) {

  const [inpValue, setInpValue] = useState('')
  const inp = document.querySelector('input')

  const isValidEmail = (email, e) => {
    if(!email) {
      inp.focus()
      e.preventDefault()
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const getModal = (e) => {
    if(isValidEmail(inpValue, e)) {
      e.preventDefault()
      setModal(true)
      setInpValue('')
    }
  }

  return (
    <div className='lg:max-w-[250px] mx-[10px] lg:mx-auto'>
      
      <div className='flex items-center p-[10px] pl-[0px]'>
        <div>
          <img src='/main-logo-dance.png' alt='logo' className='mr-[10px]' />
        </div>
        <p className='mlg:hidden font-extrabold'>
          Dance<br/>Network
        </p>
        <p className='font-extrabold text-24px pb-[5px]
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent lg:hidden'>
          Coming Soon
        </p>
      </div>
      <p className='font-extrabold text-26px pb-[5px]
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent mlg:hidden'>
          Coming Soon
        </p>

      <p className='tracking-tighter text-12px'>
        Find bachata, salsa, kizomba and more dance events near you. Expand your dance world with socials, classes and festivals.
      </p>
      
      <p className='text-xs font-bold py-[20px]'>
        Join our waitlist to get early access
      </p>

      <form>
        <p className='text-12px font-bold'>Email Addres</p>
        <input type='email' value={inpValue} placeholder='your@exapmple.com' onChange={(e) => setInpValue(e.target.value)}
          className=' text-12px p-[8px] pl-[20px] rounded-md bg-gray-100 w-full mt-[5px] mb-[20px]'
        />
        <button className='text-10px bg-customBlue rounded-md py-[8px] w-full text-white tracking-widest'
                onClick={(e) => getModal(e)}>
          GET EARLY ACCESS
        </button>
      </form>
      
      <p className='text-10px text-gray-500 tracking-wide drop-shadow-xl mt-[20px] mb-[5px]'>
        by submitting your email, agree to recieve email marketing from Social Dance TV. You can unsubscribe anytime.
      </p>
      <div className='flex items-center gap-2 mb-[10px] lg:mb-0'>
        <img src='/forbs.png' alt='forbs' className='block w-[85px]'/>
        <img src='/yahoo.png' alt='yahoo' className='block w-[125px] pt-[10px]'/>
      </div>
      <div className='border-b w-full lg:hidden mb-[20px]'></div>
    </div>
  )
}
