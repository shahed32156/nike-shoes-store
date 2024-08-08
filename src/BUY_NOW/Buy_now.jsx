import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Swal from'sweetalert2';

const Buy_now = () => {
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const navigate = useNavigate(); 

  const [mainImage, setMainImage] = useState('./Images/buy3.png');
  const images = [
    './Images/buy3.png',
    './Images/buy1.png',
    './Images/buy2.png'
  ];

  const handleSize = (e) => {
    setSize(e.target.value);
    console.log(e.target.value);
  }

  const handlePlus = () => {
    setCount(count + 1);
  }

  const handleMinus = () => {
    setCount(count - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  }

  const handleAddReview = () => {
    setShowPopup(true);
  }

  const handleCancelReview = () => {
    setShowPopup(false);
    setRating(1);
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Success",
        text: "Succsessfully Submitted",
        icon: "success"
    });
    handleCancelReview();
  }

  const handleStarClick = (index) => {
    setRating(index + 1);
  }

  return (
    <>
      <div className='mt-14 flex flex-col md:flex-row gap-6 items-center justify-between mx-3 md:mx-7 lg:mx-14 xl:mx-28 2xl:mx-48'>
        <div className='flex flex-col gap-10'>
          <div>
            <img className='h-[350px] w-[280px] md:w-[330px] xl:w-[350px] 2xl:w-[400px] mx-auto lg:mx-0' src={mainImage} alt="Main" />
          </div>
          <div className='flex gap-4 lg:gap-4 items-center justify-center'>
            {images.map((image, index) => (
              <img
                key={index}
                className='h-[100px] hover:bg-[black] hover:bg-opacity-40 duration-500 w-[90px] md:h-[130px] md:w-[130px] border-2 py-2 px-4 border-white cursor-pointer'
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        <div className='text-white flex flex-col items-center md:items-start gap-4'>
          <div>
            <h2 className='font-bold text-2xl'>Nike Shoes for men</h2>
          </div>
          <div>
            <p className='text-center md:text-start mx-6 sm:mx-8 md:mx-0  md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]'>
              Nike men's shoes blend innovative design with superior comfort, offering unmatched performance and style for every occasion. Engineered for athletes and casual wearers alike, they provide exceptional support and durability.
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
            <i className="fa-solid fa-star text-[15px] text-[yellow]"></i>
          </div>
          <div>
            <p className='font-semibold text-[18px]'>$350</p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center md:items-start'>
            <div>
              <select onChange={handleSize} className='h-[40px] w-[170px] mt-2 focus:outline-none bg-transparent border-2 border-white rounded text-white' required name="size">
                <option disabled selected value={size}>Choose Size</option>
                <option className='text-black' value="40">40</option>
                <option className='text-black' value="41">41</option>
                <option className='text-black' value="42">42</option>
                <option className='text-black' value="43">43</option>
              </select>
            </div>
            <div>
              <h4 className='text-[20px]'>QTY:</h4>
            </div>
            <div className='flex items-center gap-3 -mt-2'>
              <a className='border-[1px] duration-500 hover:bg-purple-700 hover:border-purple-700 hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[50px] rounded-lg text-[20px]' onClick={handlePlus}>+</a>
              <p className='text-xl'>{count}</p>
              <a className={`border-[1px] border-white duration-500 hover:bg-purple-700 hover:border-purple-700 hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[50px] rounded-lg text-[25px] ${count === 0 ? 'disabled' : ''}`} onClick={handleMinus} style={{ pointerEvents: count === 1 ? 'none' : 'auto' }}>-</a>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <button className='bg-gradient-to-r text-[15px] text-white font-bold from-purple-500 to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[100px] h-[40px] rounded-md'>Checkout</button>
              <a onClick={handleAddReview} className='flex items-center justify-center cursor-pointer bg-gradient-to-r text-[15px] text-white font-bold from-[tomato] to-pink-800 duration-500 hover:duration-500 hover:scale-110 hover:bg-gradient-to-l w-[100px] h-[40px] rounded-md'>Add Review</a>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <form onSubmit={handleReviewSubmit} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg w-[90%] max-w-md'>
            <h2 className='text-2xl font-bold mb-4'>Add Review</h2>
            <div className='flex mb-4'>
              {[...Array(5)].map((star, index) => (
                <i
                  key={index}
                  className={`fa-solid fa-star text-2xl cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => handleStarClick(index)}
                ></i>
              ))}
            </div>
            <textarea
              className='w-full focus:outline-none p-2 border-2 border-gray-300 rounded mb-4'
              rows='4'
              placeholder='Type your review here...'
              value={review}
              required
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <div className='flex justify-end gap-4'>
              <button onClick={handleCancelReview} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'>Cancel</button>
              <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'>Submit</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Buy_now;
