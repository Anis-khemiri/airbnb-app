import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[400px] sm:h-[400px] lg:h-[400px]'>
    <Image src="/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg" 
    className='object-cover object left'
    fill alt="landing"/>
    <div className='absolute top-1/2 w-full text-center'>
      <p className='text-sm sm:text-lg '>Not sure where to go? perfect.</p>
      <button
          type='button'
          className='p-[2px] text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
        >
          I am flexible
        </button>
    </div>
    </div>
  )
}

export default Banner;