import React, { useState, useEffect } from 'react';
import emailService from '../service/email.service';

export const EmailForm = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [template, setTemplate] = useState("Sending payments to vendor {name} at UPI {upi}");

  useEffect(() => {
    emailService.getAllVendors()
      .then(response => setVendors(response.data))
      .catch(error => console.error('There was an error!', error));
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedVendors(
      checked ? [...selectedVendors, value] : selectedVendors.filter(email => email !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedVendorData = vendors.filter(vendor => selectedVendors.includes(vendor.email));
    const emailsToSend = selectedVendorData.map(vendor => ({
      email: vendor.email,
      name: vendor.name,
      upi: vendor.upi
    }));

    emailService.sendEmails(emailsToSend)
      .then(response => alert('Emails sent successfully'))
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div>
     
       <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h2>Send Emails to Vendors</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map(vendor => (
                      <tr key={vendor.email}>
                        <td>
                          <input
                            type="checkbox"
                            value={vendor.email}
                            onChange={handleChange}
                            checked={selectedVendors.includes(vendor.email)}
                          />
                        </td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="form-group">
                  <label htmlFor="template">Email Template</label>
                  <textarea
                    id="template"
                    className="form-control"
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Send Emails</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>
           
    
  );
};
