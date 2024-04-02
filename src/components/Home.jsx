import React, { useEffect } from 'react';
import './home.css';
import img from '../images/first-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 100, // offset (in px) from the original trigger point
      duration: 2000, // duration (in ms) of the animation
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8" data-aos="fade-up">
          <div className="first-section mt-5 text-center">
            <div className="first-text ">
              <h1 className='hero-heading'>The Rare Heavenly Fresh Flowers</h1>
              <p className='hero-para p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              
            </div>
            <div className="buttons m-4 "data-aos="fade-up">
              <button className='getStarted-btn mb-1'>Get Started</button>
              <button className='orderNow-btn '> Order Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
              <div className="col-12">
              </div>
    <div className="cards mt-3 w-100 mt-2 "data-aos="fade-up">
  <div className="row">
    <div className="card p-2 col-lg-3 col-md-3 mr-3 mb-2">
      <h4 className='text-center'>810+</h4>
      <span> Clients</span>
    </div>
    <div className="card p-2 col-lg-3 col-md-3 mr-3 mb-2 ">
      <h4 className='text-center'>450+</h4>
      <span>Designers</span>
    </div>
    <div className="card p-2 col-lg-3 col-md-3 mr-3 mb-2">
      <h4 className='text-center'>50+</h4>
      <span>Long years</span>
    </div>

  </div>
</div>

    </div>
              
            
          </div>
          </div>
          
        <div className="col-12 col-md-6 col-md-4 col-lg-4" data-aos="fade-left">
          <div className="first-img w-100">
            <img style={{ borderRadius: 80 }} src={img} alt="" />
          </div>
          <div className="col-12">
          <div className="social d-flex flex-row">
            
            <div className="twitter m-2 "> <i class="fa-brands fa-twitter"></i></div>
            <div className="insta m-2"><i class="fa-brands fa-instagram"></i></div>
            <div className="fb m-2"><i class="fa-brands fa-facebook"></i></div>
          </div>
          </div>
         
        </div>
      </div>
     <div className="container">
      <div class="row mt-3">
    <div class="ship-card p-3 d-flex flex-lg-row flex-column flex-md-row mt-5" data-aos="fade-left">
        <div class="ship-card d-flex flex-row justify-content-center m-2 p-3">
            <div class="ship-img mr-3">
                <span class="material-symbols-outlined" style={{fontSize: 30}}>local_shipping</span>
            </div>
            <div class="text">
                <h4>Free Delivery</h4>
                <span>On All Orders Over $250</span>
            </div>
        </div>

        <div class="ship-card d-flex flex-row justify-content-center  p-3">
            <div class="ship-img mr-3">
                <span class="material-symbols-outlined" style={{fontSize: 30}}>wallet</span>
            </div>
            <div class="text">
                <h4>Secure Checkout</h4>
                <span>Protected by PayPal</span>
            </div>
        </div>

        <div class="ship-card d-flex flex-row justify-content-center m-2 p-3">
            <div class="ship-img mr-3">
                <span class="material-symbols-outlined" style={{fontSize:30}}>featured_seasonal_and_gifts</span>
            </div>
            <div class="text">
                <h4>Offers and Gifts</h4>
                <span>On All Orders Over $250</span>
            </div>
        </div>
    </div>
</div>
</div>
       
       

</div>
     
  
  );
};
