import { EmblaCarousel } from './EmblaCarousel'
import MainContent from './MainContent'
import Modal from './Modal'

export default function Main({modal, setModal}) {
  return (
    <main className='max-w-[1440px] mx-auto pb-[20px] lg:my-[30px] lg:px-[30px] relative'>
      <div className=' lg:max-w-[1260px] lg:mx-auto flex justify-between flex-col-reverse bg-white lg:flex-row rounded-2xl' >
        {modal && <Modal setModal={setModal}/>}
        <MainContent modal={modal} setModal={setModal}/>
        <EmblaCarousel />
      </div>
    </main>
  )
}

