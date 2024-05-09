import React from 'react'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className=' w-full h-screen bg-home-pattern bg-center bg-cover bg-no-repeat '>
      <div>
        <Navbar/>
      </div>
      <div className='font-bold flex flex-col h-5/6 px-5 justify-center text-center text-white'>
        <h1 className='md:text-[34px] text-[22px] '>Hair & Beauty Urban Salon</h1>
        <h2 className=' md:text-[26px] text-[22px]'>New Haircut New You</h2>
      </div>
    </div>
  )
}

export default Home