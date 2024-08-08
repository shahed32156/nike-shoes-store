import React, { useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { NavLink, useNavigate } from 'react-router-dom';

const Carousel = () => {

   
   const [search, setSearch] = useState("");
   const navigate = useNavigate("");

const handleSearch = (e) => {

  setSearch(e.target.value);

}

const handleSubmit = (e) => {

   e.preventDefault();
   
  navigate("/products", {state: { search }});



}

  return (
    <>
    
     <div className='mx-3'>

              <div className='flex gap-6 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-start sm:justify-start md:justify-between items-center pt-24 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-48'>

                  
          <div className='flex flex-col gap-3 sm:gap-4 md:gap-6 text-white'>

              <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold sm:w-[370px] md:w-[350px] lg:w-[400px] xl:w-[450px] leading-[40px] sm:leading-[60px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] 2xl:leading-[70px]'>Best In Style Collection <span className='text-[#e825b4]'>For You</span></h1>
              <p className='text-[16px] sm:text-[17px] lg:text-xl w-[300px] sm:w-[400px] md:w-[350px] lg:w-[400px]'>We craft the, we want to say the best, but through 70 years experience in the industry</p> 
              <NavLink to="/products"><button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[160px] h-[44px] rounded'>Explore products</button></NavLink>

          </div>


          <div className='w-[300px] md:w-[400px] lg:[500px]'>
          <ReactCarousel 
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
          >
            <div>
              <img src="./Images/c1.png" alt="Cover 1" className='' />
            </div>
            <div>
              <img src="./Images/c2.png" alt="Cover 2" className='' />
            </div>
            <div className=''>
              <img src="./Images/c3.png" alt="Cover 3" className='' />
            </div>
            <div>
              <img src="./Images/c4.png" alt="Cover 3" className='' />
            </div>
          </ReactCarousel>
        </div>


</div>


     </div>
    
    
    </>
  )
}

export default Carousel
