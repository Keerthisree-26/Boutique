import React, { useState, useEffect } from 'react';
import employeeService from '../service/employee.service';
import vendorService from '../service/vendor.service';
import emailService from '../service/email.service';

export const ViewData = () => {
    const [employees, setEmployees] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(response => setEmployees(response.data))
            .catch(error => console.error('There was an error!', error));

        vendorService.getAllVendors()
            .then(response => setVendors(response.data))
            .catch(error => console.error('There was an error!', error));

        emailService.getAllEmailRecords()
            .then(response => setEmails(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
           <h2 className='text-center mt-3'>Mails sent data</h2>
<div className="container">

<table class="table mt-4">
  <thead>
   

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Subject</th>
      <th scope="col">recipient</th>
      <th scope="col">Sent time</th>
    
     
    </tr>
  </thead>
  <tbody>
  {emails.map((email)=>(
    <tr>
     <td>{email.id}</td>
     <td>{email.subject}</td>
     <td>{email.recipient}</td>
     <td>{email.sentTime}</td>
    </tr>
    
))
}
  </tbody>
</table>
</div>
        </div>
    );
};
