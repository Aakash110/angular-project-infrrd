import { Component } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  templateUrl: './addemployee.component.html'
})
export class AddemployeeComponent {

    name:string;
    companyName:string;
    emailId:string;
    contactNo:number;
    designation:string;
    employee: Employee;
    imagesList = [];

  constructor(private employeeService: EmployeeService, private router: Router) { 
  }

  saveEmployee(){
    this.employee = new Employee(this.makeRandomID(), this.name, this.companyName, this.emailId, this.contactNo, this.designation, this.makeRandomImage());
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  cancelEmployee(){
    this.router.navigate(["Employees"]);
  }

  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  makeRandomImage() {
    var url= "";
    for (let i = 0; i < 50; i++) {
      url = 'https://source.unsplash.com/random?random=' + (i +1);
   }
   return url;
  }
}
