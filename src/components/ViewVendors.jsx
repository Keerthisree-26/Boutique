import React from 'react'
import { useState,useEffect } from 'react';
import vendorService from '../service/vendor.service';

export const ViewVendors = () => {
  
  const [vendors,setVendors]=useState([]);
  useEffect(()=>{
    vendorService.getAllVendors()
    .then((res)=>
      {
        setVendors(res.data)
      }).catch((error)=>
        {
          console.log(error);
        })

  },[])
  return (
    <div>

<h2 className='text-center mt-3'>Vendor Data</h2>
<div className="container">

<table class="table mt-4">
  <thead>
   

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">UPI</th>
    
     
    </tr>
  </thead>
  <tbody>
  {vendors.map((v,n)=>(
    <tr>
     <td>{v.id}</td>
     <td>{v.name}</td>
     <td>{v.email}</td>
     <td>{v.upi}</td>
     
    </tr>
    
))
}
  </tbody>
</table>
</div>
    </div>
  )
}
