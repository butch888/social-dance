import Carousel from './Carousel'
import MainContent from './MainContent'

export default function Main() {
  

  return (
    <div className='max-w-[1440px] mx-auto pb-[20px]'>
      <div className='max-w-full flex flex-col-reverse mx-auto bg-white lg:flex-row'>
          <MainContent />
          <Carousel />
      </div>
    </div>
  )
}

