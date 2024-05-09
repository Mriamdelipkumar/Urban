import React from 'react'
import I2 from './Images/img-photo-2.jpg'
import I3 from './Images/img-photo-3.jpg'
import I4 from './Images/img-photo-4.jpg'
import I5 from './Images/img-photo-5.jpg'

function Content() {
  return (
    <div className=' w-full h-full bg-[#F0F0F0]'>

        <div className=' text-center pt-10'>

        <h1 className=' font-bold text-[#BF9B30] text-[30px]'>Our Client Gallery</h1>
        <p className=' hidden xl:block px-5 font-semibold pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since<br/>
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/>
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets<br/>
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p className=' block xl:hidden px-5 font-semibold pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>

    <div className=' flex justify-center mt-10 mx-5'>
        <img className=' w-[900px] h-[300px] object-cover rounded-[30px]' src={I2} alt=" images" />
    </div>

    <div className=' md:flex md:flex-row flex flex-col justify-center py-10 '>
        <img className=' md:h-[300px] mx-10 mt-10 rounded-[30px]' src={I3} alt="images" />
        <img className=' md:h-[300px] mx-10 mt-10 rounded-[30px]' src={I4} alt="images" />
        <img className=' md:h-[300px] mx-10 mt-10 rounded-[30px]' src={I5} alt="images" />
    </div>

    </div>
  )
}

export default Content