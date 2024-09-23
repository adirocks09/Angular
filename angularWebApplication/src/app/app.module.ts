import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { MycustomPipe } from './employee/mycustom.pipe';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EmployeeListToggleBarComponent } from './employee/employeelist/employee-list-toggle-bar/employee-list-toggle-bar.component';
import {EmployeeService} from './employee/employeelist/employee.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {RouterModule , Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeecodeComponent } from './employee/employeelist/employeecode/employeecode.component';
import { CarComponent } from './vehicle/car/car.component';

const appRoutes : Routes = [
{path : "welcome" , component : WelcomePageComponent },
{path : "page1" , component : Page1Component },
{path : "page2" , component : Page2Component },
{path : "page1/employee" , component : EmployeeComponent },
{path : "page1/employee/empl/:code" , component : EmployeecodeComponent },
{path : "page1/vehicle" , component : VehicleComponent },
{path : "" , redirectTo : "/page2" , pathMatch : "full" },
{path : "*" , component : PageNotFoundComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MycustomPipe,
    EmployeelistComponent,
    VehicleComponent,
    EmployeeListToggleBarComponent,
    WelcomePageComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent,
    EmployeecodeComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes , {useHash:true})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
