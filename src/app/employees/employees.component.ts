import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
//import { EMPLOYEES } from '../list-employees';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  //employees = EMPLOYEES;
  employees: Employee[] = [];
  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
  this.selectedEmployee = employee;  
}

getEmployees(): void {
  //this.employees = this.employeeService.getEmployees();
  this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
}

constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
    
}
