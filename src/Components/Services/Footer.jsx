import React from 'react'
import Copyrights from '../Copyrights/Copyrights'
import I6 from './Images/img-photo-6.jpg'
import I7 from './Images/img-photo-7.jpg'

function Footer() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>
      
         <div className=' lg:flex lg:flex-row lg:justify-center lg:space-x-[30px] lg:px-5 lg:pt-[50px] flex flex-col items-center '>
            <img className=' lg:h-[300px] lg:w-[500px] h-[250px] w-[400px] rounded-br-[150px] px-10' src={I6} alt="images" />
            <div className=' font-semibold px-10'>
            <h1 className=' hidden lg:block lg:text-[22px] text-[#BF9B30]'>OUR HAPPY CLIENTS</h1>
            <h1 className=' block lg:hidden lg:text-[22px] text-[#BF9B30] pt-5 text-center'>OUR HAPPY CLIENTS</h1>
            <p className=' hidden lg:block lg:text-[32px] lg:pt-5'>Here's What Our Satisfied<br/>
            Clients Are Saying</p>
            <p className=' block lg:hidden text-justify pt-3'> Here's What Our Satisfied
            Clients Are Saying</p>
            </div>
         </div>

        <div className='lg:flex lg:flex-row lg:mt-[100px] lg:justify-center lg:space-x-[50px] py-[50px] flex flex-col items-center mt-5'>
            <div className='font-semibold lg:text-[24px] lg:px-5'>
            <h1 className=' block lg:hidden text-[#BF9B30] text-center'>Scarlett - Skin Care</h1>
            <h1 className=' hidden lg:block text-[#BF9B30]'>Scarlett - Skin Care</h1>
            <p className=' hidden lg:block lg:pt-5'>“Learn more about Dr. Scarlett approach to cosmetic<br/>
             surgery and his philosophy on patient results &<br/>
             satisfaction. Dr. Scarlett is an award-winning plastic<br/>
             surgeon in S. Scarlett. To learn more, read on.”</p>
             <p className=' block lg:hidden text-justify px-10 pt-5'>“Learn more about Dr. Scarlett approach to cosmetic
             surgery and his philosophy on patient results &
             satisfaction. Dr. Scarlett is an award-winning plastic
             surgeon in S. Scarlett. To learn more, read on.”</p>
             </div>
            <img className=' rounded-bl-[150px] lg:h-[450px] lg:w-[350px] h-[400px] w-[300px] pt-5' src={I7} alt="images" />
        </div>
        <div>
          <Copyrights/>
        </div>
    </div>
  )
}

export default Footer