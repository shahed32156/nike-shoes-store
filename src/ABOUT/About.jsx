import React, { useState } from 'react'

const About = () => {

  const [data, setData] = useState(false);

  return (
    <>
    
            <div className='flex flex-col sm:flex-col md:flex-row justify-between items-center mt-24 mx-3 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-40'>


                  <div className='flex flex-col gap-4'>

                       <p className='text-purple-400 font-bold text-[18px]'>About Us</p>                 
                       <h1 className='text-[24px] sm:[30px] md:text-[38px] text-white font-extrabold md:w-[400px]'>We Provide High Quality <span className='text-purple-400'>Shoes</span></h1> 
                       <p className='text-white md:w-[400px] lg:w-[500px] text-justify'>Discover the pinnacle of performance and style with the best quality Nike shoes available on our website. Engineered for athletes and trendsetters alike, these shoes offer unmatched comfort and durability. Each pair is designed with cutting-edge technology to provide superior support and cushioning. Whether you're hitting the gym, running a marathon, or stepping out for a casual day, Nike shoes ensure you stay ahead of the game. Explore our collection to find sleek designs and vibrant colorways that match your unique style.
                        
                        {

                            data && <span>Made from premium materials, these shoes promise long-lasting wear and exceptional breathability. Elevate your footwear game with Nike's innovative and stylish offerings. Shop now to experience the ultimate blend of performance and fashion. Don't miss out on the best Nike shoes that redefine excellence and style.</span>
                        }
                        </p>  
                       
                       <button onClick={() => setData(!data)}  className='bg-gradient-to-r text-white font-bold from-purple-500 to-purple-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[120px] h-[40px] rounded-md'>
                        
                        
                       {
                    
                            data ? "Read Less" : "Read More"
            
                       }       
                        
                        </button>

                  </div>  


                  <div className=''>

                         <img className='rotate h-[250px] w-[200px] sm:h-[320px] sm:w-[250px] md:h-[450px] md:w-[350px] lg:h-[500px] lg:w-[400px] xl:h-[550px] xl:w-[450px]2xl:h-[600px] 2xl:w-[500px]' src="./Images/about.png" alt="" />
                  
                  </div>


            </div>
    
    </>
  )
}

export default About
