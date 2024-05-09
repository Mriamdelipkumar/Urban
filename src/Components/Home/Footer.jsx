import React from 'react'
import I5 from './Images/img-photo-5.jpg'
import Copyrights from '../Copyrights/Copyrights'

function Footer() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' lg:flex lg:flex-row lg:justify-center lg:space-x-10 lg:py-[200px] lg:px-0 px-5 flex flex-col pt-[50px] items-center'>
            <img className=' rounded-full md:h-[500px] md:w-[500px]' src={I5} alt="images" />
            <div className=' lg:items-start flex flex-col justify-center items-center'>
                <h1 className=' text-[#BF9B30] text-[20px] font-semibold lg:pt-0 pt-5'>THE BEST STUDIO SINCE 2024</h1>
                <h2 className=' md:text-[24px] text-[20px] font-bold pt-5'>We Will Change Your Out Looks</h2>
                <p className=' hidden lg:block font-semibold pt-2'>Our cosmetology program transitions you from a<br/>
                   creative, willing learner to a confident, licensed<br/>
                   hair professional ready to jump into a career.</p>
                   <p className=' block lg:hidden font-semibold text-center px-[50px] pt-2'>Our cosmetology program transitions you from a
                   creative, willing learner to a confident, licensed
                   hair professional ready to jump into a career.</p>

                   <div className=' flex space-x-10 font-semibold lg:text-[20px] py-5'>

                   <div className=' text-center'>
                    <h1 className=' text-[#BF9B30]'>45+</h1>
                    <p>Years experience</p>
                   </div>

                   <div className=' text-center'>
                    <h1 className=' text-[#BF9B30]'>10,000+</h1>
                    <p>Happy clients</p>
                   </div>
                   </div>
            </div>
        </div>
        <div>
          <Copyrights/>
        </div>
    </div>
  )
}

export default Footer