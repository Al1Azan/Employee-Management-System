import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../../app/Services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit {
  Employees: any[] = []

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.getEmployee()
  }

  getEmployee(){
    this.service.loadEmployees().subscribe(data => {
      this.Employees = data
    })
  }

  deleteEmployee(employeeID: number): void {
    this.service.deleteEmployee(employeeID).subscribe(() => {
      this.getEmployee()
    });
  }
}
