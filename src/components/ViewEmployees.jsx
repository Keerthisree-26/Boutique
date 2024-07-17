import React, { useEffect, useState } from 'react'
import employeeService from '../service/employee.service';

export const ViewEmployees = () => {
    const [employees,setEmployees]=useState([]);
    useEffect(()=>
        {
            employeeService.getAllEmployees()
            .then((res)=>
                {
            
                 setEmployees(res.data)
                }).catch((error)=>
                    {
                        console.log(error);
                    });

        },[])



  return (
    <div>
<h2 className='text-center mt-3'>Employee Data</h2>
<div className="container">

<table class="table mt-4">
  <thead>
   

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">CTC</th>
    <th scope="col">Designation</th>
     
    </tr>
  </thead>
  <tbody>
  {employees.map((em,num)=>(
    <tr>
     <td>{em.id}</td>
     <td>{em.name}</td>
     <td>{em.email}</td>
     <td>{em.ctc}</td>
     <td>{em.designation}</td>
    </tr>
    
))
}
  </tbody>
</table>
</div>

    </div>
  )
}
