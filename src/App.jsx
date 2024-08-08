import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";
import RevealOnScroll from './HOOK/RevealOnScroll';
import Navbar from './NAVBAR/Navbar';
import Carousel from './CAROUSEL/Carousel';
import Arrival from './ARRIVAL/Arrival';
import About from './ABOUT/About';
import Collection from './COLLECTION/Collection';
import Customer from './CUSTOMER/Customer';
import Subscribe from './SUBSCRIBE/Subscribe';
import Footer from './FOOTER/Footer';
import User_signin from './USER_SIGN_IN/User_signin';
import Signup from './SIGNUP/Signup';
import Admin_signin from './ADMIN/Admin_signin';
import Contact from './CONTACT/Contact';
import Buy_now from './BUY_NOW/Buy_now';
import Products from './PRODUCTS/Products';
import Checkout from './CHECKOUT/Checkout';
import Forgot_pass from './USER_SIGN_IN/Forgot_pass';


function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <ClockLoader  color="#c2185B" />
        </div>
      ) : (
        <div className='bg-gradient-to-r from-[#8e068e] via-[#390139] to-[black]'>
           
           

          <BrowserRouter>

          <Navbar />
           <Carousel />

          
          
          
          <Routes>

              <Route
                path="/*"
                element={
                  <>
                    <h1 id='arrival'></h1>
          
                    <RevealOnScroll>

                          <Arrival />
                    
                    </RevealOnScroll>

                    <h1 id='collection'></h1>

                  <RevealOnScroll>

                        <Collection />

                  </RevealOnScroll>

                  <h1 id='about'></h1> 
                  
                    <RevealOnScroll>

                        <About />

                  </RevealOnScroll>

                  <RevealOnScroll>

                      <Customer />

                  </RevealOnScroll>

                  <RevealOnScroll>

                      <Subscribe />

                  </RevealOnScroll>


                  </>
                }
              />

              <Route
                path="/home"
                element={
                  <>
                    <h1 id='arrival'></h1>
          
                    <RevealOnScroll>

                          <Arrival />
                    
                    </RevealOnScroll>

                    <h1 id='collection'></h1>

                  <RevealOnScroll>

                        <Collection />

                  </RevealOnScroll>

                  <h1 id='about'></h1> 
                  
                    <RevealOnScroll>

                        <About />

                  </RevealOnScroll>

                  <RevealOnScroll>

                      <Customer />

                  </RevealOnScroll>

                  <RevealOnScroll>

                      <Subscribe />

                  </RevealOnScroll>


                  </>
                }
              />

              <Route path='/user_signin' element={

              <>

                <RevealOnScroll>

                    <User_signin />
                
                </RevealOnScroll>

              </>
              }

              />

              <Route path='/forgot_password' element={

              <>

                <RevealOnScroll>

                    <Forgot_pass />
                
                </RevealOnScroll>

              </>
              }

              />

              <Route path='/admin_signin' element={

              <>

                <RevealOnScroll>

                    <Admin_signin />
                
                </RevealOnScroll>

              </>
              }

              />

              <Route path='/signup' element={

              <>

                <RevealOnScroll>

                    <Signup />
                
                </RevealOnScroll>

              </>
              }

              />

              <Route path='/contact' element={

              <>

                <RevealOnScroll>

                    <Contact />
                
                </RevealOnScroll>

              </>
              }

              />


              <Route path='/products' element={

              <>

                <RevealOnScroll>

                    <Products />
                
                </RevealOnScroll>

              </>

              }

              />  

              <Route path='/buy_now' element={

              <>

                <RevealOnScroll>

                    <Buy_now />
                
                </RevealOnScroll>

              </>

              }

              />

              <Route path='/checkout' element={

              <>

                <RevealOnScroll>

                    <Checkout />
                
                </RevealOnScroll>

              </>

              }

              />


          </Routes>
          
          <Footer />
          </BrowserRouter>

        </div>
      )}
    </>
  );
}

export default App;
