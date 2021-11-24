import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee: Employee = {
    id: 318033743,
    fname: 'Alex',
    lname: 'Gorbachov'
  };

  employee1: Employee = {
    id: 27261611,
    fname: 'Rotem',
    lname: 'Malul'
  };

  constructor() { }

  ngOnInit(): void {
  }
    
}

