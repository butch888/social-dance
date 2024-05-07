import React from 'react'
import SocialsModal from './SocialsModal'

export default function Modal({setModal}) {
  let sign = "'"
  const offModal = () => {
    setModal(false)
  }
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 overflow-auto cursor-pointer' onClick={() => offModal()}>
      <div className='flex flex-col gap-[20px] box-border max-w-[417px] bg-white p-[40px] msm:p-[20px] m-[10px] 
                      rounded-xl mx-auto text-center absolute z-10
                      top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 cursor-default'>
        <img className='mx-auto' src='img-done.svg' alt='...' />
        <p className='font-extrabold text-32px msm:text-lg'>
          You{sign}re in
        </p>
        <p className='text-16px msm:text-12px'>
        Congrats! You{sign}ll be the FIRST to know when we open the doors to Social Dance TV Network!
        </p>
        <SocialsModal />
      </div>
    </div>  
  )
}
