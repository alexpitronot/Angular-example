import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './list-employees';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //getEmployees(): Employee[] {
    //return EMPLOYEES;
  //}

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    return employees;
  }
  constructor() { }
}
