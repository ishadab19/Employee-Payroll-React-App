import axios from "axios";


class EmployeeService {
  baseUrl = "http://localhost:8080/employeepayrollservice";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/create`, data);
  }

  getAllEmployees() {
    return axios.get(`${this.baseUrl}/get`);
  }

  deleteEmployee(empId) {
    return axios.delete(`${this.baseUrl}/delete/${empId}`);
  }

  getEmployeeById(empId) {
    return axios.get(`${this.baseUrl}/get/${empId}`);
  }

  updateEmployee(empId, data) {
    return axios.put(`${this.baseUrl}/update/${empId}`, data);
  }
}
export default new EmployeeService();