import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5  rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
        <h4 className='text-sm'>20 Dec 2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis ex vel libero ullamcorper, a tincidunt nisi placerat. Maecenas sed ipsum ac arcu fermentum pharetra non vel nunc.
    </p>
    <div className='mt-2 '>
                <button className='bg-red-500 py-1 px-2 text-sm'>Failed</button>

            </div>
</div>
  )
}

export default FailedTask