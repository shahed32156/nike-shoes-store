
import React from 'react'

import Data from './data.json'
import Footer_set_data from './Footer_set_data';
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  let items = [];

items = Data.map((item, index) => <Footer_set_data key={index} img={item.img} title={item.title} 

num1={item.num1} num2={item.num2} num3={item.num3} num4={item.num4} num5={item.num5} num6={item.num6} /> )
    

  return (


    <div className=' bg-gradient-to-r from-[#db3c9c] via-[#370125] to-[black] bg-opacity-40 py-6 mt-20 text-[white] px-8 md:px-20'>

         <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20'>

         
         <div>

              <img className='h-[50px] w-[100px]' src="./Images/logo.png" alt="" />
              <p className='text-white'>
              Explore the latest collection of Nike shoes for unbeatable comfort and style. Stay connected with us on social media for exclusive offers and updates!
              </p>
              <div className='mt-3 flex mx-auto gap-3'>
                  
                    
                <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-purple-700'><FaFacebook className='text-[25px]' /></a>


                <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-purple-700'><RiWhatsappFill className='text-[25px]' /></a>


                <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-purple-700'><FaTwitter className='text-[25px]' /></a>


                <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-purple-700'><FaYoutube className='text-[25px]' /></a>


</div>

         </div>
         


                 {items}
      

          </div>


          <div className='mt-10 text-center font-semibold'>
          <p className='border-t-[2px] font-[Infographic] border-t-purple-700 pt-4'>Copyright © 2024 Abdullah Shahed. All rights reserved</p>  
          </div>      

    </div>
  )
}

export default Footer
