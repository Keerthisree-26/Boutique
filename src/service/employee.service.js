import axios from "axios";

const API_URL="http://localhost:8080";

class EmployeeService 
{

    saveEmployee(employee)
    {
        return axios.post(API_URL+"/saveEmployee",employee);
    }

getAllEmployees()
{
    return axios.get(API_URL+"/getEmployees");
    
}
}


export default new EmployeeService;