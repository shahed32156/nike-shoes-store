import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {
  const [search, setSearch] = useState("");

  // List of all products
  const allProducts = [
    { id: 1, name: 'Nike Running', description: 'Air Zoom Pegasus', rating: "5", price: '$120', image: './Images/a1.png' },
    { id: 2, name: 'Nike Air Max', description: 'Air Max 270', rating: "4.2", price: '$150', image: './Images/a2.png' },
    { id: 3, name: 'Nike Air Force', description: 'Air Force 1', rating: "4.7", price: '$160', image: './Images/a3.png' },
    { id: 4, name: 'Nike Dunk', description: 'Dunk Low', rating: "4.8", price: '$100', image: './Images/a4.png' },
    { id: 5, name: 'Nike Renew', description: 'Renew Run 2', rating: "5", price: '$90', image: './Images/a5.png' },
    { id: 6, name: 'Nike Quest', description: 'Quest 4', rating: "5", price: '$120', image: './Images/a6.png' },
    { id: 7, name: 'Nike Revolution', description: 'Revolution 5', rating: "5", price: '$65', image: './Images/a7.png' },
    { id: 8, name: 'Nike Flex Experience', description: 'Experience Run 10', rating: "4.5", price: '$70', image: './Images/a8.png' },
    { id: 9, name: 'Nike Zoom Structure', description: 'Zoom Structure', rating: "5", price: '$80', image: './Images/a9.png' },
    { id: 10, name: 'Nike React Miler', description: 'React Miler 2', rating: "4.7", price: '$85', image: './Images/a10.png' },
    { id: 11, name: 'Nike SB Zoom', description: 'Zoom Stefan Janoski', rating: "4.8", price: '$130', image: './Images/a11.png' },
    { id: 12, name: 'Nike Glide FlyEase', description: 'Glide FlyEase', rating: "5", price: '$120', image: './Images/a12.png' },
    { id: 13, name: 'Nike Kyrie Infinity', description: 'Kyrie Infinity', rating: "5", price: '$140', image: './Images/a13.png' },
    { id: 14, name: 'Nike Free RN', description: 'Free RN 5.0', rating: "4.7", price: '$100', image: './Images/a14.png' },
    { id: 15, name: 'Nike Joyride', description: 'Joyride Dual Run', rating: "4.8", price: '$140', image: './Images/a15.png' },
    { id: 16, name: 'Nike ZoomX Invincible', description: 'Invincible Run Flyknit 3', rating: "180", price: '$120', image: './Images/a16.png' },
  ];

  // Filter products based on the search query
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add any form submission handling logic here
  };

  const handleCart = () => {
    Swal.fire({
      title: "Success",
      text: "Successfully added to cart",
      icon: "success"
    });
  };

  return (
    <>
      <div className='mt-20 md:mt-28 text-center mx-3'>
        <h1 className='text-3xl font-serif font-semibold text-white'>
          All <span className='text-purple-400'>Products</span>
        </h1>
      </div>

      <form className='flex justify-center mt-10' onSubmit={handleSubmit}>
        <div className='flex flex-row md:items-center gap-2'>
          <input
            className='h-[45px] w-full sm:w-[350px] text-black rounded bg-white focus:outline-none pl-2'
            type="text"
            required
            placeholder='Search products'
            onChange={handleSearch}
            value={search}
          />
          <button className='bg-gradient-to-r text-white from-purple-500 via-pink-500 to-red-500 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[120px] h-[44px] rounded'>
            Search
          </button>
        </div>
      </form>

      <div className='mt-10 text-center text-white text-xl'>
        <h3>Search results for: <span className='text-purple-400'>{search}</span></h3>
      </div>

      <div className='mt-10 mx-3 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-48 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredProducts.map(item => (
          <div key={item.id} className='mx-auto flex flex-col justify-center items-center'>
            <div className='w-[150px] sm:w-full bg-black py-3 px-3 rounded-md bg-opacity-30 flex flex-col gap-2'>
              <div className='bg-[#c2c2c2] w-full bg-opacity-40 sm:w-[210px] py-4 px-6 rounded-md'>
                <img className='h-[40px] w-[70px] sm:h-[90px] sm:w-[160px] mx-auto sm:mx-0' src={item.image} alt={item.name} />
              </div>
              <div className='text-white flex gap-1 justify-between items-center'>
                <div>
                  <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
                  <p>{item.rating}</p>
                </div>
                <div>
                  <a onClick={handleCart} className='cursor-pointer'>
                    <i className="fa-solid text-[18px] fa-cart-shopping"></i>
                  </a>
                </div>
              </div>
              <div className='text-white'>
                <h3 className='text-[15px] sm:text-[20px] font-bold'>{item.name}</h3>
                <p className='text-[#dedddd] text-[11px] sm:text-[13px]'>{item.description}</p>
              </div>
              <div className='text-white flex items-center gap-[15px] md:gap-[75px]'>
                <p>{item.price}</p>
                <NavLink to="/buy_now">
                  <button className='bg-gradient-to-r text-[12px] md:text-[15px] text-white font-bold from-purple-500 to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l h-[30px] w-[75px] md:w-[100px] md:h-[40px] rounded-md'>
                    Buy Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
