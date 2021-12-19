import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee?: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  selectedEmployee?: Employee;
  employees: Employee[] = [];  

  onSelect(employee: Employee): void {
  this.selectedEmployee = employee;  
}

  ngOnInit(): void {
  }

}
