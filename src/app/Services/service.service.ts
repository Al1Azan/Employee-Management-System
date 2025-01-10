import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ServiceService implements OnInit {

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.loadEmployees()
  }

  addEmployee(employeeID: string, employeeName: string, Salary: number){
    return this.http.get<any[]>("http://localhost:3000/Employee")
  }

  loadEmployees(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/Employee")
  }
}
