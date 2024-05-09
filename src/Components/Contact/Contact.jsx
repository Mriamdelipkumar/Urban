import React from 'react'
import Navbar from '../Navbar/Navbar'
import { AiOutlineTwitter , AiOutlineWhatsApp , AiOutlineInstagram , AiOutlineYoutube , AiOutlineMail } from 'react-icons/ai';
import { IoPhonePortraitOutline , IoLocationOutline } from "react-icons/io5";
function Contact() {
  return (
    <div className=' w-full h-full lg:h-screen bg-[#F0F0F0]'>
      <div className=' bg-[#E5C3C3] h-[50px] w-full'>
        <Navbar/>
      </div>
      <div className=' text-center pt-[100px]'>
        <h1 className=' font-Contact text-[38px]'>Contact Us</h1>
        <p className=' hidden lg:block font-semibold text-center pt-[50px]'>[Lorem Ipsum is simply dummy text of the printing] . Lorem Ipsum has been the industry's standard dummy text ever since<br/>
         the 1500s , galley of type and scrambled it to make a type specimen book.
       </p>
        <p className=' block lg:hidden font-semibold text-center px-5 pt-[50px]'>[Lorem Ipsum is simply dummy text of the printing] . Lorem Ipsum has been the industry's standard dummy text ever since
         the 1500s , galley of type and scrambled it to make a type specimen book.
       </p>
      </div>

      <div className=' flex justify-center pt-[100px] space-x-10 text-[#BF9B30]'>
        <a href="#"><AiOutlineTwitter size={30}/></a>
        <a href="#"><AiOutlineWhatsApp size={30}/></a>
        <a href="#"><AiOutlineInstagram size={30}/></a>
        <a href="#"><AiOutlineYoutube size={30}/></a>
      </div>
      
      <div className=' py-5 pt-[100px]'>
        <div className=' lg:flex lg:space-x-5 lg:justify-center lg:px-5 py-10'>

          <div className=' mt-[20px] lg:mx-0 mx-5 h-[200px] outline outline-[2px] rounded-[30px] lg:h-[230px] lg:w-[400px]'> 
            <div className=' pt-[20px] lg:pt-[30px] pl-[20px]' >
            <p><AiOutlineMail size={30}/></p>
            <h1 className=' pt-[10px] lg:pt-[20px] font-bold'>Email Id</h1>
            <p className=' font-semibold pt-[10px]'>support@Urban.com</p>
            </div>
            <div className=' flex space-x-5 lg:pt-[30px] pt-[20px]'>
            <div className=' bg-black rounded-[30px] ml-[20px] h-[25px] w-[100px]'><a href="#" className=' text-white font-bold flex justify-center uppercase '>Contact</a></div>
            <p className=' font-semibold'>*extra information(optional)</p>
            </div>
          </div>

          <div className=' mt-[20px] mx-5 h-[200px] outline outline-[2px] rounded-[30px] lg:h-[230px] lg:w-[400px]'> 
            <div className=' pt-[20px] lg:pt-[30px] pl-[20px]' >
            <p><IoPhonePortraitOutline size={30}/></p>
            <h1 className=' pt-[10px] lg:pt-[20px] font-bold'>Phone</h1>
            <p className=' font-semibold pt-[10px]'>Office : +61 234-567 8910</p>
            </div>
            <div className=' flex space-x-5 lg:pt-[30px] pt-[20px]'>
            <div className=' bg-black rounded-[30px] ml-[20px] h-[25px] w-[100px]'><a href="#" className=' text-white font-bold flex justify-center uppercase '>Call</a></div>
            <p className=' font-semibold'>*extra information(optional)</p>
            </div>
          </div>

          <div className=' mt-[20px] mx-5 h-[200px] outline outline-[2px] rounded-[30px] lg:h-[230px] lg:w-[400px]'> 
            <div className=' pt-[20px] lg:pt-[30px] pl-[20px]' >
            <p><IoLocationOutline size={30}/></p>
            <h1 className=' pt-[10px] lg:pt-[20px] font-bold'>Office</h1>
            <p className=' font-semibold pt-[10px]'>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div className=' flex space-x-5 lg:pt-[30px] pt-[20px]'>
            <div className=' bg-black rounded-[30px] ml-[20px] h-[25px] w-[100px]'><a href="#" className=' text-white font-bold flex justify-center uppercase '>Loaction</a></div>
            <p className=' font-semibold'>*extra information(optional)</p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact