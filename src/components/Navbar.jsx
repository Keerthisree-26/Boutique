import React from 'react'
import './nav.css'
import img from '../images/logo.png'
export const Navbar = () => {
  return (
    <div className='container mt-4'>
        <div className="navbar">
            <div className="logo">
                <img src={img} alt="" />
            </div>
<div className="nav">
<div class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

    <div class=" nav collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li ><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Blogs</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
        </ul>
        <span class="material-symbols-outlined m-lg-2 ">
search
</span>
    </div>
</div>
</div>
      

            
            
           
        </div>
    </div>
  )
}
