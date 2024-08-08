import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Customer = () => {
  return (
    <>
      <div className='flex justify-center md:mt-24 mx-3'>
        <h1 className='text-[20px] sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-white font-sans'>
          What Our <span className='text-purple-400'>Customer</span> Says!
        </h1>
      </div>

      <div className='mt-10 bg-black bg-opacity-30 pt-[20px] pb-[40px]'>
        <Carousel
          className='mt-10 no-dots' // Add the custom class here
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div className='text-center text-white flex flex-col justify-center items-center gap-3'>
            <div className='border-[4px] border-purple-500 rounded-full'>
              <img className=' h-[70px] w-[70px] rounded-full mx-auto' src="./Images/aliz.jpg" alt="Raknat Jahan Aliz" />
            </div>
            <h4 className='text-xl font-bold'>Raknat Jahan Aliz</h4>
            <p className='md:w-[550px] text-[13px] sm:text-[14px] md:text-[16px]'>
              "Absolutely love these Nike shoes! The comfort and style are unmatched. Perfect fit, and the design is fantastic. Highly recommend them to anyone looking for quality and performance."
            </p>
            <div className='flex gap-2 mt-2'>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            </div>
          </div>

          <div className='text-center text-white flex flex-col justify-center items-center gap-3'>
            <div className='border-[4px] border-purple-500 rounded-full'>
              <img className='h-[70px] w-[70px] rounded-full mx-auto' src="./Images/john.jpg" alt="John Doe" />
            </div>
            <h4 className='text-xl font-bold'>John Doe</h4>
            <p className='md:w-[550px] text-[13px] sm:text-[14px] md:text-[16px]'>
              "These Nike shoes exceeded my expectations. The cushioning is great, and they look stylish. Perfect for running and casual wear. I am extremely happy with this purchase."
            </p>
            <div className='flex gap-2 mt-2'>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            </div>
          </div>

          <div className='text-center text-white flex flex-col justify-center items-center gap-3'>
            <div className='border-[4px] border-purple-500 rounded-full'>
              <img className='h-[70px] w-[70px] rounded-full mx-auto' src="./Images/richard.webp" alt="Jane Smith" />
            </div>
            <h4 className='text-xl font-bold'>Joseph Smith</h4>
            <p className='md:w-[550px] text-[13px] sm:text-[14px] md:text-[16px]'>
              "Nike never disappoints! These shoes are incredibly comfortable and supportive. The design is sleek, and they fit perfectly. Ideal for both sports and everyday use."
            </p>
            <div className='flex gap-2 mt-2'>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
              <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            </div>
          </div>
        </Carousel>
      </div>

      <style jsx>{`
        .no-dots .control-dots {
          display: none;
        }
      `}</style>
    </>
  )
}

export default Customer
