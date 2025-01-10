import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  private apiUrl = 'http://localhost:3000/Employee';

  constructor(private http: HttpClient) { 

  }

  loadEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  addEmployee(Employee: {employeeID: number, employeeName: string, Salary: number}) {
    return this.http.post<any>(this.apiUrl, Employee);
  }

  deleteEmployee(employeeID: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${employeeID}`);
  }
}
