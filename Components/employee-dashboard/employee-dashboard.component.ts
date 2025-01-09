import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeTableComponent } from "../employee-table/employee-table.component";
import { CompanyInformationComponent } from '../company-information/company-information.component';

@Component({
  selector: 'app-employee-dashboard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})

export class EmployeeDashboardComponent {
  
}
