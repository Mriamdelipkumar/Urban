import React from 'react'
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <div className=' w-full h-screen bg-slate-300 bg-About-pattern bg-center 2xl:bg-top bg-cover bg-no-repeat'>
        <div>
            <Navbar/>
        </div>

        <div className=' w-full h-5/6 flex flex-col text-center justify-center text-white px-5'>  
            <h1 className=' text-[22px] font-bold'> OUR TEAM</h1>
            <h2 className=' font-bold text-[28px] pt-2'>Showcase our event services in the best light</h2>
            <p className=' block md:hidden font-semibold pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Praesent in ligula sed felis consequat porta at eget risus.</p>
             <p className=' hidden md:block font-semibold pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Praesent in ligula sed felis consequat porta at eget risus.</p>
        </div>

    </div>
  )
}

export default About