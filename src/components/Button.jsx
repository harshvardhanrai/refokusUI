import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className=' px-4 py-2 rounded-full text-black flex items-center justify-between bg-zinc-100'>
      <span className='text-sm font-'>{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button