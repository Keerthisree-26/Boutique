import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import employeeService from '../service/employee.service';
import vendorService from '../service/vendor.service';

export const VendorForm = () => {
    const [vendor, setVendor] = useState({
        name: '',
        email: '',
        upi: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        vendorService.saveVendor(vendor)
            .then(response => alert('Vendor created successfully'))
            .catch(error => console.error('There was an error!', error));
    };
  return (
    <div>
<div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
              <form onSubmit={handleSubmit}>
            <h2>Create Vendor</h2>
           <div>
           <input type="text"  className='form-control m-2'name="name" placeholder="Name" onChange={handleChange} required />
           </div>
         <div>
         <input type="email" className='form-control m-2' name="email" placeholder="Email" onChange={handleChange} required />
         </div>
          <div>
          <input type="text" className='form-control m-2' name="upi" placeholder="UPI" onChange={handleChange} required />
          </div>
          <div>
          <button  type="submit" className='btn btn-primary mt-4'>Create</button>
          </div>
        </form>


                
           </div>
     </div>
       </div>
    </div>
    </div>
    </div>

  )
}
