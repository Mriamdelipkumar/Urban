import React from 'react'
import I2 from './Images/img-photo-2.jpg'
import I3 from './Images/img-photo-3.jpg'
import I4 from './Images/img-photo-4.jpg'

function Content() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' text-center pt-[50px]'>
            <h1 className=' text-[#BF9B30] text-[20px] font-bold'>Specialists With Many Years Of Experience</h1>
            <p className=' hidden md:block pt-[50px] font-semibold text-[22px]'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text<br/>
            Lorem Ipsum is simply dummy text</p>
            <p className=' block md:hidden px-5 pt-5 font-semibold text-[18px]'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
            Lorem Ipsum is simply dummy text</p>
        </div>

        <div className=' flex flex-wrap justify-center px-5 pt-[50px] py-10'>

            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I2} alt="images" />
            <div className=' text-center'>
                <h1 className=' font-bold pt-5'>Hair Specialist</h1>
                <p className=' font-semibold pt-2'>Elena</p>
            </div>
            </div>

            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I3} alt="images" />
            <div className=' text-center'>
                <h1 className=' font-bold pt-5'>Bridal makeup Expert</h1>
                <p className=' font-semibold pt-2'>Lisa</p>
            </div>
            </div>

            <div className=' mt-5 mx-5'>
            <img className=' rounded-[30px] h-[400px]' src={I4} alt="images" />
            <div className=' text-center'>
                <h1 className=' font-bold pt-5'>Skin Care Specialist</h1>
                <p className=' font-semibold pt-2'>Scarlett</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Content