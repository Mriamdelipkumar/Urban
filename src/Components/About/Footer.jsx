import React from 'react'
import I5 from './Images/img-photo-5.jpg'
import Copyrights from '../Copyrights/Copyrights'

function Footer() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' xl:flex xl:flex-row flex flex-col items-center justify-center pt-[50px] xl:py-[180px] xl:space-x-10 px-5 py-10'>
            <img className=' rounded-[30px] xl:h-[600px] xl:w-[450px] h-[450px] w-[350px]' src={I5} alt="images" />
            <div className=''>
                <h1 className=' font-bold text-center xl:text-start xl:text-[36px] pt-5 text-[28px]'>Our Story</h1>
                <p className=' hidden xl:block xl:font-semibold xl:pt-[10px] pt-2 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br/>
                   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of<br/>
                   type and scrambled it to make a type specimen book.</p>
                   <p className=' block xl:hidden pt-2 text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book.</p>
                <h2 className=' font-bold text-center xl:text-start xl:text-[24px] xl:pt-[30px] text-[20px] pt-8'>Always Clean</h2>
                <p className=' xl:font-semibold xl:pt-[10px] pt-2 xl:text-start text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. make a type specimen.</p>
                <h3 className=' font-bold text-center xl:text-start xl:text-[24px] xl:pt-[30px] text-[20px] pt-8'>Always Leading And Ethical</h3>
                <p className='xl:font-semibold xl:pt-[10px] xl:text-start pt-2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. make a type specimen.</p>
                <h4 className=' text-center font-semibold xl:text-start xl:pt-[10px] pt-5'>Our Founder</h4>
                <h5 className=' text-center font-medium xl:text-start xl:pt-[10px] pt-5'>Elizabeth</h5>
                <h6 className=' text-center xl:text-start font-sign font-bold xl:text-[40px] text-[30px]'>Elizabeth S.</h6>
            </div>
        </div>
        
        <div>
          <Copyrights/>
        </div>

    </div>
  )
}

export default Footer