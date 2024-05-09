import React from 'react'
import I6 from './Images/img-photo-6.jpg'
import I7 from './Images/img-photo-7.jpg'
import I8 from './Images/img-photo-8.jpg'
import Copyrights from '../Copyrights/Copyrights'

function Footer() {
  return (
    <div className=' h-full w-full bg-[#F0F0F0]'>

        <div className=' text-center pt-[80px] px-5'>

        <h1 className=' font-bold text-[#BF9B30] text-[30px]'>Explore Our Bridal Make up Artists</h1>
        <p className=' hidden xl:block font-semibold pt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since<br/>
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/>
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets<br/>
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p className=' block xl:hidden font-semibold pt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
        <div className=' block xl:hidden'>
        <div className=' md:flex md:flex-col items-center'>
        <div className=' md:w-[700px] md:h-[400px] w-11/12 mx-4 h-[500px] bg-[#E5C3C3] rounded-[30px] mt-16'>
            <div className=' md:flex md:flex-row flex flex-col items-center md:pl-10 md:pt-10'>
            <img className=' mt-[10px] w-[100px] md:h-[300px] md:w-[200px] md:rounded-[30px] rounded-[10px]' src={I6} alt="images" />
            <div className=' md:flex md:flex-col md:text-justify text-center'>
            <h1 className=' font-bold pt-5 md:pl-[20px] text-[32px]'>John Charles</h1>
            <h2 className=' font-semibold pt-5 text-[#BF9B30] md:pl-[20px] text-[18px]'>experience 10 years</h2>
            <p className=' font-semibold text-justify px-5 pt-5'>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s, when
            an unknown printer took a galley of type
            and scrambled it to make a type book</p>
            </div>
            </div>
        </div>
        </div>
        </div>

        <div className=' block xl:hidden'>
        <div className=' md:flex md:flex-row justify-center flex flex-col py-[100px] '>
            <img className=' md:h-[300px] mt-5 mx-10 rounded-[30px]' src={I7} alt="images" />
            <img className=' md:h-[300px] mt-5 mx-10 rounded-[30px]' src={I8} alt="images" />
        </div>
        </div> 

        <div className=' hidden xl:block'>
            <div className=' flex flex-row justify-center space-x-5 mt-[100px] py-[100px]'>
            <div className=' pl-[40px] pt-[50px] flex bg-[#E5C3C3] w-[700px] h-[400px] rounded-[30px]'>
            <img className=' h-[300px] w-[200px] rounded-[30px]' src={I6} alt="images" />
            <div className=' pt-5 pl-5 px-10'>
                <h1 className=' pt-5 font-bold text-[32px] '>John Charles</h1>
                <h2 className=' font-semibold text-[#BF9B30] text-[18px] pt-[10px]'>experience 10 years</h2>
                <p className=' text-justify font-semibold pt-[10px] '>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
                dummy text ever since the 1500s, when
                an unknown printer took a galley of type
                and scrambled it to make a type book</p>
            </div>
            </div>

        <div className=' hidden xl:block'>
        <div className=' flex flex-row space-x-5 '>
            <img className=' h-[400px] rounded-[30px]' src={I7} alt="images" />
            <img className=' h-[400px] rounded-[30px]' src={I8} alt="images" />
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