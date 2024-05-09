import React from 'react'
import Navbar from '../Navbar/Navbar'

function Bridal() {
  return (
    <div className=' w-full h-screen 2xl:bg-top bg-Bridal-pattern bg-cover bg-center bg-no-repeat'>
        <div>
            <Navbar/>
        </div>

        <div className=' text-white flex flex-col w-full h-5/6 justify-center items-center px-5'>
          <h1 className=' text-[22px] font-bold'>BRIDAL MAKEUP</h1>
          <h2 className=' text-[36px] font-bold mt-3 text-center'>Shining Bright Like A Bride</h2>
          <div className="bg-black w-[100px] h-[30px] pt-[2px] text-center font-semibold mt-5 rounded-[10px]">
          <a href="#">Book Now</a></div>
        </div>
    </div>
  )
}

export default Bridal