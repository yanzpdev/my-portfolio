import Image from 'next/image'
import React from 'react'

const TimelineComponent = () => {
  return (
    <div className='h-[50vh] max-w-6xl mx-auto grid grid-cols-9 pb-32'>
      <div className='bg-white rounded-xl drop-shadow-xl border h-full col-span-4 mt-10'>
        
      </div>
      <div className='col-span-1 flex items-center h-[130%] relative justify-center'>
        <hr className='h-2 bg-black w-full invisible'/>
        <div className='bg-black rounded-xl h-full w-1/6 mx-auto'>
            
        </div>
        <div className='flex items-center relative -left-4'>
          <div className='h-12 w-12 rounded-full bg-red-700'></div>
          <hr className='h-2 bg-red-700 w-full'/>
        </div>
      </div>
      <div className='h-full col-span-4 mt-10 flex items-center gap-5'>
        <div className='rounded-full h-36 w-36 bg-white border-4 border-red-700'>
          <Image 
            src={'/assets/bk.png'}
            alt=''
            width={1000}
            height={1000}
            className='w-full h-full rounded-full'
          />
        </div>
        <p className='text-4xl'>2021 - 2022</p>
      </div>
    </div>
  )
}

export default TimelineComponent