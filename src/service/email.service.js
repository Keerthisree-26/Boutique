import axios from "axios";

const API_URL = "http://localhost:8080";

class EmailService 
{
  sendEmails(vendorDetails) {
    return axios.post(API_URL + "/send", vendorDetails);
  }

  getAllVendors() {
    return axios.get(API_URL + "/vendors");
  }

  getAllEmailRecords() {
    return axios.get(API_URL + "/email-records");
}
}

export default new EmailService();
