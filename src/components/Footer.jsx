import React from 'react'
import img from '../images/footer-logo.png'
import './footer.css';

export const Footer = () => {
  return (
    <div>
      <div className="container-fluid " style={{backgroundColor:"#783B5A"}}>
       
        <div className="logo text-center">
          <img src={img} alt="" />
        </div>

        
        <div className="nav justify-content-center">
          <div className="home">
            <span> <a href="">Home</a></span>
           
            </div>
          <div className="home">
            
            <a href="">About Us</a>
            </div>
          <div className="home">
            <a href="">Contact</a>
           </div>
          <div className="home">
            <a href="">Services</a>
          </div>
          <div className="home">
            <a href="">Products</a>
            
        </div>
        <div className="home">
            <a href="">Blogs</a>
            
        </div>
        
        </div>
        <hr className="hr-style" />
        <div className="contact-info col-md-12 justify-content-center">
          <div className="mail d-flex flex-row">
          <span class="material-symbols-outlined">
                pin_drop
            </span>
            <p className='contact-text'>Plaza XYZ,XY floor, XYZ Stree, XYZ</p>
          </div>
          <div className="mail d-flex flex-row ">
            <span class="material-symbols-outlined ">
                mail
            </span>
            <p className='contact-text'>yourname@gmail.com</p>
          </div>
        <div className="mail d-flex flex-row">
          <span class="material-symbols-outlined ">
            call
        </span>
        <p className='contact-text'>+91-9393453245</p>
        </div>
      <div div className="mail d-flex flex-row">
        <span class="material-symbols-outlined ">
            update
        </span>
        <p className='contact-text'>Mon-Sat, 9AM to 6PM</p>
     </div>
</div>
<hr className="hr-style" />
        <div className="get-update ">
          <h3>Get Update</h3>
          <p>Subscribe to our newsletter to get 30% off</p>
          <input className="contact-input mt-1 mb-1"type="text" placeholder='Enter you mail...' />
           <button className='contact-btn'><span class="material-symbols-outlined">
send
</span></button>
         
        </div>

      </div>
      <div className="container-fluid">
        <div className="copyright text-center m-2">
        Copyright © 2024 XYZ. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
