import React, { useState } from 'react';

import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Swal from'sweetalert2';

const Checkout = () => {

  const navigate = useNavigate();   
  const [showPopup, setShowPopup] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleProceedToPayment = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setCardNumber(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 3) {
      setCvv(value);
    }
  };

  const handleDate = (e) => {

    setDate(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cardNumber.length < 12) {
      
      Swal.fire({
          title: "Error",
          text: "Card number must be 12 digits long",
          icon: "error"
      });

      return;

    }

    if (cvv.length < 3) {

      Swal.fire({
          title: "Error",
          text: "CVV must be 3 digits long",
          icon: "error"
      });
  
      return;
    }


      Swal.fire({
          title: "Success",
          text: "Successfully paid",
          icon: "success"
      });

      navigate("/home");
    

    
}

  return (
    <>
      <div className='text-white mt-24 flex items-center justify-evenly mx-3 sm:mx-8 md:mx-16 lg:mx-48 xl:mx-64 2xl:mx-[330px]'>
        <div className='flex flex-col gap-3 items-center'>
          <i className="fa-solid fa-truck text-xl sm:text-2xl md:text-3xl"></i>
          <p className='text-white'>Shipping info</p>
        </div>
        <h1 className='bg-white h-[2px] w-[100px] sm:w-[350px] md:w-[390px] lg:w-[400px] xl:w-[550px] 2xl:w-[650px]'></h1>
        <div className='flex flex-col gap-3 items-center'>
          <i className="fa-regular fa-square-check text-xl sm:text-2xl md:text-3xl"></i>
          <p className='text-white'>Confirm order</p>
        </div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row justify-between items-center mt-10 mx-3 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-64'>
        <div className='text-white flex flex-col gap-4'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold'>Shipping Info</h2>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-white flex justify-center items-center h-[40px] w-[40px] rounded-full'>
              <i className="fa-solid fa-user text-purple-800 text-[20px]"></i>
            </div>
            <div>
              <p>Abdullah Shahed</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-white flex justify-center items-center h-[40px] w-[40px] rounded-full'>
              <i className="fa-solid fa-phone text-purple-800 text-[20px]"></i>
            </div>
            <div>
              <p>+880174-1987566</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-white flex justify-center items-center h-[40px] w-[40px] rounded-full'>
              <i className="fa-solid fa-location-dot text-purple-800 text-[20px]"></i>
            </div>
            <div>
              <p>Mirpur-14, Dhaka-1206</p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='text-3xl font-bold mt-4'>Items</h1>
            </div>
            <div className='flex border-[1px] border-white py-1 w-[300px] gap-6 items-center mt-3'>
              <img className='h-[50px] w-[100px]' src="./Images/a1.png" alt="" />
              <p>Nike Running</p>
              <p>$120</p>
            </div>
            <div className='flex border-[1px] border-white py-1 w-[300px] gap-6 items-center'>
              <img className='h-[50px] w-[100px]' src="./Images/a2.png" alt="" />
              <p>Nike Air Max</p>
              <p>$150</p>
            </div>
          </div>
        </div>
        
        <div className=' bg-white flex justify-center items-center w-full sm:w-[350px] md:w-[400px] py-6 rounded'>
          <div className='text-black flex flex-col gap-5'>
            <div>
              <h1 className='text-3xl pb-4 font-bold border-b-[1px] border-b-black'>Order Summary</h1>
            </div>
            <div className='flex pb-2 flex-col gap-2 border-b-[1px] border-b-black'>
              <p>Subtotal: $270</p>
              <p>Shipping charge: $0</p>
              <p>VAT: $50</p>
            </div>
            <div>
              <p className='font-bold -mt-3'>Total: $320</p>
            </div>
            <div className='flex justify-center'>
              <button
                className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-110 from-purple-700 to-pink-400 text-white rounded h-[40px] w-[170px]'
                onClick={handleProceedToPayment}
              >
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <form onSubmit={handleSubmit} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white pb-8  rounded-md w-[90%] max-w-md'>
            <div className='flex justify-between items-center px-3 py-2 text-white rounded-t-[4px] bg-gradient-to-l from-purple-700 to-pink-400'>
              <h2 className='text-xl font-bold'>Payment Details</h2>
              <button onClick={handleClosePopup} className='text-white'><FiX className='text-[20px]' /></button>
            </div>
            <div className='flex justify-center'>
              <img src="./Images/all_cards.png" alt="Accepted Cards" className='h-[110px] w-[220px]' />
            </div>
            <div className=' px-8'>
              <label className='block text-sm font-medium'>Card Number</label>
              <input
                type='text'
                className='mt-1 p-2 focus:outline-none border rounded w-full'
                required
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className='flex sm:gap-2 md:gap-4 mt-4 px-8'>
              <div className='w-1/2'>
                <label className='block text-sm font-medium'>Expiry Date</label>
                <input type='date' onChange={handleDate} value={date} className='mt-1 p-2 focus:outline-none border rounded w-full' required />
              </div>
              <div className='w-1/2 px-8'>
                <label className='block text-sm font-medium'>CVV</label>
                <input
                  type='password'
                  required
                  className='mt-1 p-2 focus:outline-none border rounded w-[80px] sm:w-full'
                  value={cvv}
                  onChange={handleCvvChange}
                />
              </div>
            </div>
            <div className='flex justify-center mt-6 px-8'>
              
              <button className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-110 from-purple-700 to-pink-400 text-white rounded h-[40px] w-[170px]'>
                Pay Now
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Checkout;
