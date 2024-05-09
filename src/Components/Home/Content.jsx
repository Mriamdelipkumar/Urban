import React from 'react'
import I2 from './Images/img-photo-2.jpg'
import I3 from './Images/img-photo-3.jpg'
import I4 from './Images/img-photo-4.jpg'

function Content() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' text-center px-5 pt-[50px]'>
        <h1 className=' text-[#BF9B30] font-bold text-[24px]'>Your Satisfaction Is Our Priority</h1>
        <p className=' block lg:hidden  pt-10 font-semibold text-[20px]'>We performs a full spectrum of body contouring, facial plastic surgery, and breast
           enhancement procedures. We uses many sophisticated, customizable techniques
           to suit your specific needs and preferences.</p>
        <p className=' hidden lg:block pt-10 font-semibold text-[22px]'>We performs a full spectrum of body contouring, facial plastic surgery, and breast<br/>
           enhancement procedures. We uses many sophisticated, customizable techniques<br/>
           to suit your specific needs and preferences.</p>
           </div>

           <div className=' flex flex-wrap justify-center md:mt-[50px] px-5 py-10 '>

            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I2} alt="images" />
            <div className=' text-center font-bold pt-5'>
            <h1>Haircut</h1>
            </div>
            </div>

            
            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I3} alt="images" />
            <div className=' text-center font-bold pt-5'>
            <h1>Hair & Style</h1>
            </div>
            </div>

            
            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I4} alt="images" />
            <div className=' text-center font-bold pt-5'>
            <h1>Hair coloring</h1>
            </div>
            </div>

           </div>

    </div>
  )
}

export default Content