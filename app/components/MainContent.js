import React from 'react'

export default function MainContent() {
  return (
    <div className='mx-auto my-auto'>
      
      <div className='flex'>
        <img src='/main-logo-dance.png' alt='logo' className='block mr-[10px]' />
        <h1 className='font-extrabold tracking-wider'>Dance<br/>Network</h1>
      </div>
      <img src='/coming-soon.png' alt='title' className='pt-[35px] pb-[20px]' />
      <p className='font-bold tracking-tighter text-sm'>
        Find bachata, salsa, kizomba and more dance <br/>events near you. Expand your dance world with <br/>socials, classes and festivals.
      </p>
      <p className='text-sm pt-[25px] pb-[25px]'>
        Join our waitlist to get early access
      </p>

      <form>
        <p className='text-14px'>Email Addres</p>
        <input type='text' placeholder='your@exapmple.com' 
          className=' text-14px p-[10px] pl-[20px] rounded-md bg-gray-100 w-full mt-[5px] mb-[25px]'/>
        <button className='text-12px bg-customBlue rounded-md py-[12px] w-full text-white tracking-widest'>
          GET EARLY ACCESS
        </button>
      </form>
      
      <p className='text-14px text-gray-500 tracking-wide drop-shadow-xl mt-[20px] mb-[20px]'>
        by submitting your email, agree to recieve email marketing<br/>from Social Dance TV. You can unsubscribe anytime.
      </p>
      <div className='flex items-center gap-10'>
        <img src='/forbs.png' alt='forbs' className='w-[95px]'/>
        <img src='/yahoo.png' alt='yahoo' className='w-[135px]'/>
      </div>
    </div>
  )
}
