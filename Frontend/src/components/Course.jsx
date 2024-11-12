import React from 'react'
import Cards from './Cards'
import list from "./../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 mt-20'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl font-semibold'>
        We are delighted to have you <span className='text-pink-500'>here :)</span>
      </h1>

      <p className='mt-12'>At BookHunt, your journey through the world of books begins here. From timeless classics to the latest bestsellers, we’re here to spark curiosity and fuel your passion for reading. Discover books that resonate with you, explore genres you’ve yet to uncover, and let every page take you somewhere new


      </p>

      <Link to="/">

      <button className="badge badge-outline bg-pink-500 text-black hover:bg-pink-700 hover:text-white mt-10 h-10 w-20">Back</button>
    
      </Link>
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>

        {

            list.map((item)=>{
                return <Cards key={item.id} item={item}/>
            })



        }
    </div>
    </div>
    </> 
  )
}

export default Course
