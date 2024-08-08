import React, { useState } from 'react'

import Swal from'sweetalert2';

const Subscribe = () => {

    const [email, setEmail] = useState("");

    const handleEmail = (e) => {

        setEmail(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        Swal.fire({
            title: "Success",
            text: "Successfully Subscribed",
            icon: "success"
        }); 

    }

  return (
    <>
    
     
    <div className='mt-24 mx-5'>


           
             
             
           <form onSubmit={handleSubmit}  action="">

           
            <h1 className='text-xl text-center md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white'>Subscrbe for news and latest updates</h1>

                    <div className='mt-6 flex flex-col justify-center items-center  md:flex-row gap-3'>

                            
                            <input className='h-[50px] w-full md:w-[400px] focus:outline-none pl-2 bg-white rounded-md' type="email" onChange={handleEmail} value={email} placeholder='example@gmail.com' />
                            <button className='bg-gradient-to-r text-white font-bold from-purple-500 to-purple-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[100px] h-[40px] md:w-[120px] md:h-[50px] rounded-md'>Subscribe</button>

                    </div> 


           </form>

    </div>
    
    
    </>
  )
}

export default Subscribe
