import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {

  allEmployees:Employee[] = [
    {
      "id": "1",
      "name": "Aakash Singhal",
      "companyName": "Zephyr",
      "emailId":"aakashpoly13@gmail.com",
      "contactNo": 8971957460,
      "designation": "Software Engineer",
      "imageUrl": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&q=80&fm=jpg"
      }
  ];

  getAllEmployees():Employee[]{
    return this.allEmployees;
  }

  addEmployee(employee:Employee){
    this.allEmployees.push(employee);
  }

  updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.name = employee.name;
    updateEmployee.companyName = employee.companyName;
    updateEmployee.emailId = employee.emailId;
    updateEmployee.contactNo = employee.contactNo;
    updateEmployee.designation = employee.designation;
    updateEmployee.imageUrl = employee.imageUrl;
  }

  deleteEmployee(id:string){
    this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
  }
  
  getEmployee(id:string):Employee{
    return this.allEmployees.find(emp => emp.id == id);
  }
}