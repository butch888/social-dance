import React from 'react'

export default function MainContent() {
  return (
    <div className=' lg:mx-[100px] lg:max-w-[400px] px-[20px] pt-[50px] mx-auto'>
      
      <div className='flex justify-left items-center pb-[20px] msm:justify-center'>
        <img src='/main-logo-dance.png' alt='logo' className='block mr-[10px]' />
        <p className='mlg:hidden font-extrabold'>
          Dance<br/>Network
        </p>
        <p className='font-extrabold text-28px small:text-32px 
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent lg:hidden'>
          Comming Soon
        </p>
      </div>
      <p className='font-extrabold text-28px small:text-32px 
                      from-green-500 via-teal-600 to-indigo-500 bg-gradient-to-r bg-clip-text text-transparent mlg:hidden'>
          Comming Soon
        </p>

      <p className='mx-auto tracking-tighter text-14px sm:text-center'>
        Find bachata, salsa, kizomba and more dance events near you. Expand your dance world with socials, classes and festivals.
      </p>
      
      <p className='text-xs font-bold pt-[25px] pb-[25px] sm:text-center'>
        Join our waitlist to get early access
      </p>

      <form>
        <p className='text-12px font-bold'>Email Addres</p>
        <input type='email' placeholder='your@exapmple.com' 
          className=' text-14px p-[10px] pl-[20px] rounded-md bg-gray-100 w-full mt-[5px] mb-[25px]'
        />
        <button className='text-12px bg-customBlue rounded-md py-[12px] w-full text-white tracking-widest'>
          GET EARLY ACCESS
        </button>
      </form>
      
      <p className='text-14px text-gray-500 text-center tracking-wide drop-shadow-xl mt-[20px] mb-[5px]'>
        by submitting your email, agree to recieve email marketing from Social Dance TV. You can unsubscribe anytime.
      </p>
      <div className='flex items-center gap-2 mb-[10px]'>
        <img src='/forbs.png' alt='forbs' className='block w-[95px]'/>
        <img src='/yahoo.png' alt='yahoo' className='block w-[135px] pt-[10px]'/>
      </div>
    </div>
  )
}
