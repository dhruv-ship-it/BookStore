import React from 'react'
import banner from '../assets/bannerrs.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4  mt-20  flex flex-col md:flex-row'>

    <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold'>Welcome , learn something <span className='text-pink-500'>new everyday!!!</span></h1>
        <p>
        Welcome to BookHunt—where every book tells a story, and there's something here for everyone! Whether you're diving into a new adventure, looking for inspiration, or just love the smell of fresh pages, you'll find plenty to explore.</p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
    </div>

    <button className="mt-6 btn btn-secondary">Get Weekly Recommendations</button>
    

    </div>

    <div className='w-full md:w-1/2 order-1 md:order-2'>
        <img src={banner}/>


    </div>
    </div>
    
    </>
  )
}

export default Banner
