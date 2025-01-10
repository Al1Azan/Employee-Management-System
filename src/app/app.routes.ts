import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { EmployeeDashboardComponent } from '../Components/employee-dashboard/employee-dashboard.component';
import { CompanyInformationComponent } from '../Components/company-information/company-information.component';
import { PageNotFoundComponent } from '../Components/page-not-found/page-not-found.component';
import { EmployeeTableComponent } from '../Components/employee-table/employee-table.component';

export const routes: Routes = [
    {                                                       //Default Routing
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },

    {
        path: "Home",
        title: "Home",
        component: HomeComponent
    },

    {
        path: "Employee_Dashboard",
        title: "Company Dashboard",
        component:EmployeeDashboardComponent,
        children:[
            {
                path: "Company_Information",
                title: "Dashboard | Company",
                component: CompanyInformationComponent
            },

            {
                path: "Employee_Table",
                title: "Dashboard | Employee",
                component: EmployeeTableComponent
            },
        ]
    },

    {                                                      //Wildcard Routing
        path: "**",
        title: "Error 404",
        component: PageNotFoundComponent
    }
];
