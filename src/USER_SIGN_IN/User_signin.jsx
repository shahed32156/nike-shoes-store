import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import Swal from'sweetalert2';

const User_signin = () => {

    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


   const handleEmail = (e) => {

       setEmail(e.target.value);

   }

   const handlePass = (e) => {

    setPass(e.target.value);

}

const handleSubmit = (e) => {

    e.preventDefault();

        Swal.fire({
            title: "Success",
            text: "Successfully Signed in",
            icon: "success"
        }); 

        navigate('/home');

}


  return (
    <>
    
      <div className='mx-3'>

                <div className='bg-black bg-opacity-40 shadow-xl duration-500 hover:shadow-[#ee1f9b] rounded py-10 border-[7px] border-[#ee1f9b] w-full sm:w-[450px] md:w-[450px] mx-auto mt-20'>

            <h1 className='text-white text-3xl font-bold text-center'>Sign in</h1>

            <form onSubmit={handleSubmit} className='text-white text-[18px] flex flex-col gap-4 justify-center items-center mt-6' action="">


            <div className='relative'>
                
                <input className='h-[45px] w-[260px] sm:w-[350px] duration-500 shadow-lg focus:shadow-purple-700
                 rounded border-2 pl-9 border-purple-700 focus:outline-none' 
                 type="email" required placeholder='Enter your email' name="email" id="" value={email} onChange={handleEmail} />                    
                <i className="fa-sharp fa-solid fa-envelope text-purple-700 absolute top-4 left-3 text-[18px]"></i>
            
            </div>

            <div className='relative'>
                
                <input className='h-[45px] w-[260px] sm:w-[350px] duration-500 shadow-lg focus:shadow-purple-700 
                rounded border-2 pl-9 border-purple-700 focus:outline-none' 
                type="password"  required placeholder='Enter your password' name="password" id="" value={pass} onChange={handlePass} />                    
                <i className="fa-solid fa-lock text-purple-700 absolute top-4 left-3 text-[18px]"></i>
            
            </div>

            <div className='flex'>

                    <NavLink to="/forgot_password" className="text-[14px] text-blue-500 w-[300px] ml-11 md:-ml-12"> Forgot Password? </NavLink>

            </div>

            <div className=''>
                
            <button className='bg-gradient-to-r text-white font-bold from-purple-500 to-purple-800 duration-500 hover:duration-500 hover:bg-gradient-to-l w-[256px] sm:w-[346px] h-[40px] rounded-md'>Signin</button>
            
            </div>

            <div className=''>
                
            <span className="text-[14px] text-white"> Don't have an account? <NavLink to="/signup" className='text-blue-500'>Signup</NavLink> </span>
            
            </div>



            </form>
            </div>

      </div>
    
    </>
  )
}

export default User_signin
