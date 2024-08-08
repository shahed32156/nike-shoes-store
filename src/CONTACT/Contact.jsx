import React, { useState } from 'react'

import Swal from'sweetalert2';

const Contact = () => {

  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
  
    const handleName = (e) => {
          
          const value = e.target.value;
          const regex = /^[a-zA-Z\s]*$/;
      
          if (regex.test(value)) {
            setName(value);
          } else {
            Swal.fire({
              title: "Error",
              text: "Invalid name",
              icon: "error"
            });
          }
        
    }
  
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
  
    const handleMsg = (e) => {
        setMsg(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name.length <= 3) {
            Swal.fire({
                title: "Error",
                text: "Name must be more than 3 characters",
                icon: "error"
            });
            return;
        }
  
        Swal.fire({
            title: "Success",
            text: "Successfully sent your message",
            icon: "success"
        });
  
    }

  return (

    <>
    

    <div className='mt-20 md:mt-28 text-center mx-3'>
        
        <h1 className='text-3xl font-serif font-semibold text-white'><span className='text-purple-400'>Contact</span> with us</h1>
    
    </div>

    <div className='mx-3 flex justify-center mt-5'>
            <p className='text-[17px] text-center text-white'>Have any queries? Our dedicated support team is here to help you.</p>
    </div>

     
     <div className='mt-10 mx-3'>
        
          <div className='flex flex-col md:flex-row gap-6 md:mx-5 lg:mx-16 xl:mx-44 2xl:mx-56 justify-between items-center'>
            
                <div className='flex flex-col gap-6'>

                        <div className='flex items-center gap-3 mx-auto md:mx-0'>
                                <div className='bg-white flex justify-center items-center h-[50px] w-[50px] rounded-full'>
                                <i class="fa-solid fa-location-dot text-purple-800 text-[20px]"></i>
                                </div>
                                <div className='text-white flex flex-col gap-1'>
                                    <h4 className='text-[18px] font-bold'>Address</h4>
                                    <p className='w-[240px]'>1234 Aviation Way, Suite 100, Los Angeles, CA 90001</p>
                                </div>
                        </div>

                        <div className='flex items-center gap-3 mx-auto md:mx-0'>
                                <div className='bg-white flex justify-center items-center h-[50px] w-[50px] rounded-full'>
                                <i class="fa-sharp fa-solid fa-envelope text-purple-800 text-[20px]"></i>
                                </div>
                                <div className='text-white flex flex-col gap-1'>
                                    <h4 className='text-[18px] font-bold'>Email</h4>
                                    <p className='w-[240px]'>support@nikeshoes.com</p>
                                </div>
                        </div>

                        <div className='flex items-center gap-3 mx-auto md:mx-0'>
                                <div className='bg-white flex justify-center items-center h-[50px] w-[50px] rounded-full'>
                                <i class="fa-solid fa-phone text-purple-800 text-[20px]"></i>
                                
                                </div>
                                <div className='text-white flex flex-col gap-1'>
                                    <h4 className='text-[18px] font-bold'>Phone</h4>
                                    <p className='w-[240px]'>+1-800-123-4567</p>
                                </div>
                        </div>


                </div>


                        <div className='flex flex-col justify-center items-center gap-6 py-8 rounded bg-white w-full sm:w-[450px]'>

                                    <div className='text-black'>

                                    <h1 className='text-3xl font-bold'>Send Message</h1>

                                    </div>

                                    <form onSubmit={handleSubmit} className='flex flex-col gap-4' action="">

                                    <div>
                                    <input className='h-[45px] w-[250px] sm:w-[300px] border-b-2 border-black focus:outline-none' type="text" name="name" id="" 
                                    placeholder='Enter your name' required onChange={handleName} value={name} />
                                    </div>

                                    <div>
                                    <input className='h-[45px] w-[250px] sm:w-[300px] border-b-2 border-black focus:outline-none' type="email" name="email" id="" 
                                    placeholder='Enter your email' required onChange={handleEmail} value={email} />
                                    </div>

                                    <div>
                                    <textarea className='h-[45px] pt-2 w-[250px] sm:w-[300px] bg-black bg-opacity-0 border-b-2 border-black focus:outline-none' type="text" name="message" id="" 
                                    placeholder='Type your message' required onChange={handleMsg} value={msg}>

                                    </textarea>
                                    </div>

                                    <div className='mt-2'>
                                        <button className='bg-gradient-to-r text-white font-bold from-purple-500 to-purple-800 duration-500 hover:duration-500 hover:bg-gradient-to-l w-[110px] h-[40px] rounded-md'>Send</button> 
                                    </div>

                                    </form>

                        </div>
            
         </div>   
        
     </div>  
    
    </>
  )
}

export default Contact
