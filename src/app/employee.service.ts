import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './list-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //getEmployees(): Employee[] {
    //return EMPLOYEES;
  //}

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('Employee Service message: all employees were updated!');
    return employees;
  }
  constructor(private messageService: MessageService) { }

  getEmployee(id: number): Observable<Employee> {   
    const employee = EMPLOYEES.find(h => h.id === id)!;
    this.messageService.add(`Employee Service: fetched employee id=${id}`);
    return of(employee);
  }
}
