import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { EmployeeForm } from './components/EmployeeForm';
import { ViewData } from './components/ViewData';
import { VendorForm } from './components/VendorForm';
import { EmailForm } from './components/EmailForm';
import { ViewEmployees } from './components/ViewEmployees';
import { ViewVendors } from './components/ViewVendors';

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className='buttons d-flex justify-content-evenly'> 
      <button className="btn btn-warning" onClick={() => navigate('/employeeForm')}>Employee Form</button>
      <button className="btn btn-warning" onClick={() => navigate('/vendorForm')}>Vendor Form</button>
      <button  className="btn btn-warning" onClick={() => navigate('/emailForm')}>Email Form</button>
      <button  className="btn btn-warning" onClick={() => navigate('/viewData')}>View Data</button>
      <button className="btn btn-warning"   onClick={() => navigate('/viewEmployees')}> View All the Employees</button>
      <button className="btn btn-warning"  onClick={() => navigate('/viewVendors')}> View All Vendors</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h3>ADMIN DASHBOARD</h3> 

      <Router>
        <NavigationButtons />
        <Routes>
          <Route path='/employeeForm' element={<EmployeeForm />} />
          <Route path='/viewData' element={<ViewData />} />
          <Route path='/vendorForm' element={<VendorForm />} />
          <Route path='/emailForm' element={<EmailForm />} />
          <Route  path='/viewEmployees'  element={<ViewEmployees/>}/>
          <Route path='/viewVendors' element={<ViewVendors/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
