import React from 'react'
import { useState } from 'react';

import employeeService from '../service/employee.service';

export const EmployeeForm = () => {

    const [employee, setEmployee] = useState({
        name: '',
        designation: '',
        ctc: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        employeeService
           .saveEmployee(employee)
            .then(response => alert('Employee created successfully'))
            .catch(error => console.error('There was an error!', error));
    };
  return (

    
    <div >
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
              <form  onSubmit={handleSubmit} >


<h2>Create Employee</h2>
<div>
<input type="text"  className='form-control m-2' name="name" placeholder="Name" onChange={handleChange} required />
</div>
<div>
<input type="text" className='form-control m-2' name="designation" placeholder="Designation" onChange={handleChange} required />
</div>

<div>
<input type="number" className='form-control m-2' name="ctc" placeholder="CTC" onChange={handleChange} required />
</div>
<div>
<input type="email"  className='form-control m-2' name="email" placeholder="Email" onChange={handleChange} required />
</div>
<div>
<button type="submit" className='btn btn-primary m-3'>Create</button>
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
