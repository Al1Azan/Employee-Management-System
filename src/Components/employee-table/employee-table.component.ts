import { Component} from '@angular/core';
import { ServiceService } from '../../app/Services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent{
  constructor(private service: ServiceService) {}

  Employees: any[] = [
    
  ]

  ngOnInit(): void {
    this.service.loadEmployees().subscribe((employee) => {
      this.Employees = employee
    } )
  }
}
