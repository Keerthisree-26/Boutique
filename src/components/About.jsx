import React from 'react'
import image1 from '../images/about1.png'
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';
import './about.css';
export const About = () => {
  return (
    <div>
        <div className="container">
            <div className="about">
            <div className="about-images" data-aos="fade-up">
                <div className="about-left-images">
                 
                     <div className="image2 m-3">
                        <img style={{ borderRadius: 10 }} src={image2} alt="" />
                    </div>
                    <div className="image1 m-3">
                        <img style={{ borderRadius: 10 }}  src={image1} alt="" />
                    </div>
                    
                   </div>
                <div className="col-12 col-md-4">
                <div className="about-right-image d-md-none d-lg-block">
                <img style={{ borderRadius: 10 }}  src={image3} alt="" />
                </div>
                </div>
                
            </div>
            <div className="about-text text-center m-5" data-aos="fade-up">
                <h2>About Us</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque magnam nihil odit quibusdam illum non animi dolorem beatae ipsa earum officiis, quo suscipit atque corrupti accusantium libero esse? Magnam.</p>
                
                <button className='discover m-2'>Discover more</button>
            </div>
        </div>
        </div>
    </div>
  )
}
