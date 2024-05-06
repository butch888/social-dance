import React from 'react'
import SocialsHeader from './SocialsHeader'

export default function Modal({setModal}) {
  let sign = "'"
  const offModal = () => {
    setModal(false)
  }
  return (
    <div className='flex flex-col gap-[20px] box-border max-w-[417px] bg-white p-[40px] m-[10px] 
                    rounded-xl mx-auto text-center cursor-pointer absolute z-10
                    top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4'
        onClick={() => offModal()}>
      <img className='mx-auto' src='img-done.svg' alt='...' />
      <p className='font-extrabold text-32px'>
        You{sign}re in
      </p>
      <p className='text-16px'>
      Congrats! You{sign}ll be the FIRST to know when we open the doors to Social Dance TV Network!
      </p>
      <SocialsHeader />
    </div>
  )
}
