import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';

function Freebook() {

    const filterData=list.filter((data)=>data.category==="Free");
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20  mt-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>
            Free Offered Courses
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa quos ut officia explicabo! Quae cum, eius maiores magnam numquam illum tempora autem possimus incidunt illo optio error dicta saepe?
        </p>
        </div>
    


    <div>
    <div className="slider-container">
      <Slider {...settings} className=''>
      {filterData.map((item)=>{
        return <Cards item={item} key={item.id}/>
})}
      </Slider>
    </div>
  
    </div>

    </div>
    
    </>
  )
}

export default Freebook
