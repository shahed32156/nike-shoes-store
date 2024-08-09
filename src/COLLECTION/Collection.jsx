import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Swal from'sweetalert2';

const products = [
  
  { id: 1, category: 'Men', image: './Images/a1.png', rating: 5.0, name: 'Nike Renew', description: 'Renew Run 2', price: 90 },
  { id: 2, category: 'Women', image: './Images/a2.png', rating: 5.0, name: 'Nike Quest', description: 'Quest 4', price: 120 },
  { id: 3, category: 'Sports', image: './Images/a3.png', rating: 4.8, name: 'Nike Revolution', description: 'Revolution 5', price: 65 },
  { id: 4, category: 'Men', image: './Images/a4.png', rating: 5.0, name: 'Nike Flex', description: 'Experience Run 10', price: 70 },
  { id: 5, category: 'Men', image: './Images/a5.png', rating: 4.5, name: 'Nike Air Zoom', description: 'Air Zoom Vomero', price: 75 },
  { id: 6, category: 'Women', image: './Images/a6.png', rating: 4.8, name: 'Nike Precision', description: 'Precision 6', price: 180 },
  { id: 7, category: 'Sports', image: './Images/a7.png', rating: 4.9, name: 'Nike SB Nyjah', description: 'Nyjah Free 2', price: 250 },
  { id: 8, category: 'Men', image: './Images/a8.png', rating: 5.0, name: 'Nike Renew', description: 'Renew Lucent', price: 195 },

];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCart = () => {


    Swal.fire({
      title: "Success",
      text: "Successfully added to cart",
      icon: "success"
  }); 

  }

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 mt-24 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-52'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-white font-sans'>
            Our New <span className='text-purple-400'>Collection</span>
          </h1>
          <p className='text-[#ecebeb] text-[13px] sm:text-[16px]'>Best collection</p>
        </div>

        <div className='flex gap-2 md:gap-3'>
          {['All', 'Men', 'Women', 'Sports'].map(category => (
            <button
              key={category}
              className={`border-[2px] hover:border-none border-pink-800 hover:bg-gradient-to-r text-white text-[12px] sm:text-[14px] md:text-[16px] font-bold hover:from-purple-500 hover:to-pink-800 duration-500 hover:duration-500 hover:scale-110 h-[30px] w-[70px] md:w-[100px] md:h-[40px] rounded-md ${activeCategory === category ? 'bg-gradient-to-r from-purple-500 to-pink-800' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-10 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-48 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredProducts.map(product => (
          <div key={product.id} className='mx-auto flex flex-col justify-center items-center'>
            <div className='w-[150px] sm:w-full bg-black py-3 px-3 rounded-md bg-opacity-30 flex flex-col gap-2'>
              <div className='bg-[#c2c2c2] w-full bg-opacity-40 sm:w-[210px] py-4 px-6 rounded-md'>
                <img className='h-[40px] w-[70px] sm:h-[90px] sm:w-[160px] mx-auto sm:mx-0' src={product.image} alt="" />
              </div>
              <div className='text-white flex gap-1 justify-between items-center'>
                <div>
                    <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
                    <p>{product.rating}</p>
                </div>
                <div>
                    <a onClick={handleCart} className='cursor-pointer'><i class="fa-solid text-[18px] fa-cart-shopping"></i></a>
                </div>
              </div>
              <div className='text-white'>
                <h3 className='text-[15px] sm:text-[20px] font-bold'>{product.name}</h3>
                <p className='text-[#dedddd] text-[11px] sm:text-[13px]'>{product.description}</p>
              </div>
              <div className='text-white flex items-center gap-[15px] md:gap-[75px]'>
                <p>${product.price}</p>
                <NavLink to="/buy_now"><button className='bg-gradient-to-r text-[12px] md:text-[15px] text-white font-bold from-purple-500 to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l h-[30px] w-[75px] md:w-[100px] md:h-[40px] rounded-md'>Buy Now</button></NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
