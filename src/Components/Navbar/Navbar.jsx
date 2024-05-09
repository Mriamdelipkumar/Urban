import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/16/solid'

function Navbar() {
 const [ toggleMenu , setToggleMenu ] = useState (false) ;
  return (
    <div className=' flex justify-between px-5 text-white'>
            <h1 className='text-[#BF9B30] font-Logo text-[24px] pt-1.5'><Link to="/">Urban</Link></h1>
        <nav className=' hidden md:block'>
          <ul className=' flex space-x-5 font-semibold pt-3.5'>
            <li className=' hover:text-[#BF9B30]'><Link to="/">Home</Link></li>
            <li className=' hover:text-[#BF9B30]'><Link to="/Services">Services</Link></li>
            <li className=' hover:text-[#BF9B30]'><Link to="/Bridal">Bridal</Link></li>
            <li className=' hover:text-[#BF9B30]'><Link to="/About">About</Link></li>
            <li className=' hover:text-[#BF9B30]'><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        { toggleMenu && <nav className=' block md:hidden'>
          <ul className=' flex flex-col font-semibold fixed left-0 bg-[#F0F0F0] text-black w-10/12 h-full pl-5 pt-3.5'> 
            <h1 className=' text-[#BF9B30]'>Urban International Salon</h1>
            <li className=' hover:text-[#BF9B30] pt-5'><Link to="/">Home</Link></li>
            <li className=' hover:text-[#BF9B30] pt-2'><Link to="/Services">Services</Link></li>
            <li className=' hover:text-[#BF9B30] pt-2'><Link to="/Bridal">Bridal</Link></li>
            <li className=' hover:text-[#BF9B30] pt-2'><Link to="/About">About</Link></li>
            <li className=' hover:text-[#BF9B30] pt-2'><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>}

        <button onClick={()=> setToggleMenu (!toggleMenu)} className=' block md:hidden'><Bars3Icon className=' text-white h-5'/></button>
    </div>
  )
}

export default Navbar