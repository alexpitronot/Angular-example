import { Component, OnInit } from '@angular/core';
//import { Employee } from '../employee';
import { Employees } from '../list-employees';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee = Employees;

  constructor() { }

  ngOnInit(): void {
  }
    
}
