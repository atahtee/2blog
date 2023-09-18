import React from 'react'

const HomePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/*left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className='h-full w-full object-cover' />
      </div>
      {/*right*/}
      <div className='flex flex-col w-[65%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          10 uses of artificial intelligence in day to day life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <p>@atati</p>
          <div className='flex space-x-2 text-sm'>
            <p>16/6/2022</p>
            <p>16:45</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>Apple's 2023 iPhone event came and went almost in the blink of an eye. As always, the company had a bunch of new devices to show off during the "Wonderlust" showcase but thanks to long-standing rumors, there weren't too many major surprises.</p>
      </div>
    </div>
   
  )
}

export default HomePosts