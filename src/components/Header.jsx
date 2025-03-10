import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-7'>
     <div className='text-stone-500 inline-flex text-center bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
     </div>

     <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] m-auto mt-7 text-center'>Turn text to <span className='text-red-500'>image</span>  in seconds</h1>
     <p className='text-center max-w-xl mx-auto mt-4'>Unleash you creativity with Ai. Turn your imagination into visual art in seconds-just type,and watch the magic happen</p>
     <Link to='/result' className='sm:text-lg text-white bg-black w-auto mt-5 px-12 py-2.5 flex items-center gap-2 rounded-full'>Generate Image 
        <img className='h-6' src={assets.star_group} alt="" />
     </Link>
     <div className='flex flex-wrap justify-center mt-6 gap-3'>
        {Array(6).fill('').map((item,index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index %2 ===0 ? assets.sample_img_1:assets.sample_img_2} alt="" key={index } width={70} />
        ))}
     </div>
     <p className="mt-1 text-neutral-600 ">Generated images from Textura</p> 
    </div>
  )
}

export default Header
