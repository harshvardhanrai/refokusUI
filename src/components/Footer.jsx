import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-1/2'>
          <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
          <div className='basis-1/3'>
            <h4 className='mb-8 text-zinc-500'>Socials</h4>
            {["Instagram","X", "LinkedIn"].map((elem, index) => <a className='block mt-2 text-zinc-400'>{elem}</a>)}
          </div>

          <div className='basis-1/3'>
            <h4 className='mb-8 text-zinc-500'>Sitemap</h4>
            {["Home","Work", "Careers", "Contact"].map((elem, index) => <a className='block mt-2 text-zinc-100'>{elem}</a>)}
          </div>

          <div className='basis-1/2'>
            <p className='text-right '>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer