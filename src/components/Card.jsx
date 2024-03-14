import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, start, para, hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[25rem] flex flex-col justify-between`}>
      <div className='w-full'>
      <div className='w-full flex justify-between items-center '>
        <h3>Get in Touch</h3>
        <IoIosArrowRoundForward />
      </div>
      <h3 className='text-3xl font-medium mt-5'>Let's do it, together</h3>
      </div>
      <div className='down w-full'>
        {
          start === true && (
            <>
             <h1 className='text-5xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className='rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-400'>Contact Us</button>
            </>

          )
        }
       {
        para  === true && (
          <>
          <p className='text-sm font-medium leading-relaxed mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </>
        )
       }
      
      </div>
    </div>
  )
}

export default Card
