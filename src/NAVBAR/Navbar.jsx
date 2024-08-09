import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaBookmark } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleUserOptions = () => {
    setUserOptionsOpen(!userOptionsOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.user-options') && !event.target.closest('.user-icon')) {
      setUserOptionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className="flex navbar top-0 justify-between py-5 px-3 lg:px-10 fixed w-full z-10">
        <div>
          <img className='h-[40px] w-[80px]' src="./Images/logo.png" alt="logo" />
        </div>
        <div className="text-white flex justify-center items-center gap-8 hidden md:flex">
        <NavLink to="/home" href="" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Home</NavLink>
          <NavLink to="/products" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Products</NavLink>
          <NavLink to="/contact" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Contact</NavLink>
        </div>

        <div className="text-white flex items-center gap-8 hidden md:flex">
        
          <div className='flex'>
            <a onClick={toggleCart} className="cursor-pointer duration-500 hover:text-[#fa45c1]"><i class="fa-solid text-[18px] fa-cart-shopping"></i></a>
            <p className='-mt-3 text-[12px]'>{count}</p>
          </div>
          <div className='relative user-icon'>
            <a onClick={toggleUserOptions} className="cursor-pointer duration-500 hover:text-[#fa45c1]"><i className="fa-solid fa-user"></i></a>
            {userOptionsOpen && (
              <div className="user-options absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
               <a className="block px-4 py-2 hover:rounded-t-md text-gray-800 hover:text-white hover:bg-purple-500"><NavLink to="/admin_signin">Admin Panel</NavLink></a>
               <a className="block px-4 py-2 hover:rounded-b-md text-gray-800 hover:text-white hover:bg-purple-500"><NavLink to="/user_signin">User Panel</NavLink></a>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden text-white flex gap-3 items-center">
          
          <div className='flex'>
            <a onClick={toggleCart} className="cursor-pointer duration-500 text-[#eb36d9] hover:text-[#fa45c1]"><i class="fa-solid text-[18px] fa-cart-shopping"></i></a>
            <p className='-mt-3 text-[12px]'>{count}</p>
          </div>
          <div className='relative user-icon'>
            <a onClick={toggleUserOptions} className="cursor-pointer duration-500 text-[#eb36d9] hover:text-[#fa45c1]"><i className="fa-solid fa-user"></i></a>
            {userOptionsOpen && (
              <div className="user-options absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
                 <a className="block px-4 py-2 hover:rounded-t-md text-gray-800 hover:text-white hover:bg-purple-500"><NavLink to="/admin_signin">Admin Panel</NavLink></a>
                 <a className="block px-4 py-2 hover:rounded-b-md text-gray-800 hover:text-white hover:bg-purple-500"><NavLink to="/user_signin">User Panel</NavLink></a>
              </div>
            )}
          </div>
          <button onClick={toggleNav}> 
            {navOpen ? <FiX className="text-[#eb36d9] text-2xl" /> : <FiMenu className="text-[#eb36d9] text-2xl" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-[70px] navbar1 left-0 h-[300px] w-full z-10  text-white flex flex-col items-center justify-center gap-3 px-3 transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
          <NavLink to="/home" onClick={toggleNav} href="" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Home</NavLink>
          <NavLink onClick={toggleNav} to="/products" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Products</NavLink>
          <NavLink onClick={toggleNav} to="/contact" className="cursor-pointer duration-500 hover:text-[#fa45c1]">Contact</NavLink>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80  navbar1  p-5 shadow-lg z-50 transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out overflow-auto`}
      >
        <div className="flex border-white pb-2 border-b-2 justify-between items-center">
          <h2 className="text-xl text-white font-bold"><i class="fa-solid text-[20px] fa-cart-shopping"></i></h2>
          <button onClick={toggleCart}><FiX className="text-2xl text-white" /></button>
        </div>
        <p className="mt-5 text-white">Your cart is empty now</p>
       <div className='flex flex-col gap-6 justify-center items-center m-10'>
          <img className='h-[200px] w-[150px]' src="./Images/bag.png" alt="" />
         <NavLink to="/home"><button className=" bg-[tomato] text-white w-[220px] py-2 rounded hover:bg-[#e97662]" onClick={toggleCart}>
              Back to the Nike Store <i class="fa-solid fa-arrow-right ml-2"></i>
            </button></NavLink>
       </div>
      </div>
    </>
  );
};

export default Navbar;
