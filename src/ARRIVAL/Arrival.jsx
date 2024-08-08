import React from 'react'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Arrival = () => {
  const handleCart = () => {
    Swal.fire({
      title: "Success",
      text: "Successfully added to cart",
      icon: "success"
    });
  };

  return (
    <>
      <div className='flex justify-between items-center gap-4 mt-24 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-52'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[20px] sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-white font-sans'>New <span className='text-purple-400'>Arrival</span></h1>
          <p className='text-[#ecebeb] text-[13px] sm:text-[16px]'>Our New Collection</p>
        </div>
        <div>
         <NavLink to="/products"><button className='bg-gradient-to-r text-white font-bold from-purple-500 to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[100px] h-[40px] rounded-md'>See All</button></NavLink>
        </div>
      </div>

      <div className='mt-10 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-48 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
        {[
          { id: 1, name: 'Nike Running', description: 'Air Zoom Pegasus', price: '$120', image: './Images/a1.png' },
          { id: 2, name: 'Nike Air Max', description: 'Air Max 270', price: '$150', image: './Images/a2.png' },
          { id: 3, name: 'Nike Air Force', description: 'Air Force 1', price: '$160', image: './Images/a3.png' },
          { id: 4, name: 'Nike Dunk', description: 'Dunk Low', price: '$100', image: './Images/a4.png' },
        ].map(item => (
          <div key={item.id} className='mx-auto flex flex-col justify-center items-center'>
            <div className='w-[150px] sm:w-full bg-black py-3 px-3 rounded-md bg-opacity-30 flex flex-col gap-2'>
              <div className='bg-[#c2c2c2] w-full bg-opacity-40 sm:w-[210px] py-4 px-6 rounded-md'>
                <img className='h-[40px] w-[70px] sm:h-[90px] sm:w-[160px] mx-auto sm:mx-0' src={item.image} alt={item.name} />
              </div>
              <div className='text-white flex gap-1 justify-between items-center'>
                <div>
                  <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
                  <p>5</p>
                </div>
                <div>
                  <a onClick={handleCart} className='cursor-pointer'><i className="fa-solid text-[18px] fa-cart-shopping"></i></a>
                </div>
              </div>
              <div className='text-white'>
                <h3 className='text-[15px] sm:text-[20px] font-bold'>{item.name}</h3>
                <p className='text-[#dedddd] text-[11px] sm:text-[13px]'>{item.description}</p>
              </div>
              <div className='text-white flex items-center gap-[15px] md:gap-[75px]'>
                <p>{item.price}</p>
                <NavLink to="/buy_now">
                  <button className='bg-gradient-to-r text-[12px] md:text-[15px] text-white font-bold from-purple-500 to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l h-[30px] w-[75px] md:w-[100px] md:h-[40px] rounded-md'>Buy Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Arrival;
