import axios from "axios";
const API_URL="http://localhost:8080";
class VendorService
{
    
    saveVendor(vendor)
{
    return axios.post(API_URL+"/saveVendor",vendor);
}

getAllVendors()
{
return axios.get(API_URL+"/getVendors");

}
}
export default new VendorService;