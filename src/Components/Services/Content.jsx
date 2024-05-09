import React from 'react'
import I2 from './Images/img-photo-2.jpg'
import I3 from './Images/img-photo-3.jpg'
import I4 from './Images/img-photo-4.jpg'
import I5 from './Images/img-photo-5.jpg'

function Content() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' text-center font-bold pt-[80px]'>
        <h1 className=' text-[20px] text-[#BF9B30]'>EXPLORE OUR PROGRAMS</h1>
        <p className=' text-[30px] pt-2'>We Are Proud Of Our Service</p>
        </div>

        <div className='flex flex-wrap justify-center py-5'>

            <div className='mt-10 mx-5'>
            <img className='h-[400px] rounded-[30px]' src={I2} alt="images" />
            <div className=' text-center font-bold'>
            <h1 className=' pt-5'>Manicure & Pedicure</h1>
            <h2 className=' pt-2'>Price : 500 $</h2>
            </div>
            </div>

            <div className=' mt-10 mx-5'>
            <img className='h-[400px] rounded-[30px]' src={I3} alt="images" />
            <div className=' text-center font-bold'>
            <h1 className=' pt-5'>Manicure & Pedicure</h1>
            <h2 className=' pt-2'>Price : 500 $</h2>
            </div>
            </div>

            <div className=' mt-10 mx-5'>
            <img className='h-[400px] rounded-[30px]' src={I4} alt="images" />
            <div className=' text-center font-bold'>
            <h1 className=' pt-5'>Manicure & Pedicure</h1>
            <h2 className=' pt-2'>Price : 500 $</h2>
            </div>
            </div>

            <div className=' mt-10 mx-5'>
            <img className='h-[400px] rounded-[30px]' src={I5} alt="images" />
            <div className=' text-center font-bold'>
            <h1 className=' pt-5'>Manicure & Pedicure</h1>
            <h2 className=' pt-2'>Price : 500 $</h2>
            </div>
            </div>
           
        </div>

        <div className=' text-center pt-10 px-5 py-10'>
        <h1 className=' text-[30px] font-bold text-[#BF9B30]'>Skin Treatment</h1>
        <p className=' block lg:hidden pt-10 font-semibold text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.</p>
         <p className=' hidden lg:block pt-10 font-semibold text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<br/>
         dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

    </div>
  )
}

export default Content