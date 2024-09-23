import { Component, OnInit } from '@angular/core';
import { IEmployee } from "../iemployee"; //single dot in the path means parent folder (here : employeelist)
                                          //double dot means grandparent folder (here : employee)
                                          //triple dot means great grandparent folder (here : app)
import {EmployeeService} from "./employee.service";
import {EmployeeComponent} from "../employee.component";
import { IFamily } from "../ifamily";
import "rxjs/add/operator/retry";
import {ISubscription} from "rxjs/Subscription"

@Component({
    selector: 'app-employeelist',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

    empListHardCodedServiceCall: IEmployee[];
    familyListHttpCallServiceCall: IFamily[];
    statusMessage:string="Please Wait....";
    
    subscription:ISubscription;

    constructor(public employeeService: EmployeeService) {  // Shorthand expression : parametres passed in constructor are meant for dependency injection 
     console.log("Service Bean Injection Sucessfull!!!  "); // 1. constructor parametres must have an acess specifier associated with it (like public, private)
    }                                                       // 2. All the parametres defined in constructors should have a corresponding bean registered with angular . 
                                                                          //For eg . all the class components( like EmployeeComponent) , service ,pipes , modules like (HttpModule, FormModule)are registered as "beans" in app.module.ts

    ngOnInit() {   // Ideal place to make service calls
        this.empListHardCodedServiceCall = this.employeeService.getHardCodedList();
        console.log("Hard Coded Employee List from Service Call :  "+JSON.stringify(this.empListHardCodedServiceCall));
        
        //After calling subscribe method the control goes to next line i.e. line no 50 . Therefore ,  the line no 50 gets printed first than line no 33
        //The print statement on line 50 says undefined because service call to another api takes some time
        this.subscription=this.employeeService.getHttpCallList() // There are lot of function which can be used on Observable object like subscribe , retry ,retryWhen
        .retry(5)  // retry and retryWhen is called before subscribe 
        .subscribe( // subscribe method returns object of class "Subscription" which implements an interface "ISubscription" and has a method called "unsunscribe()". The subscription object also has a boolean property called "closed" whose value tells us whether we have an open subscription or closed 
        (responseData)=> {
            this.familyListHttpCallServiceCall=responseData;
            this.statusMessage="HTTP Call Succesfull !!!!";
            console.log("Inside Subscribe Method : Http Call Employee List from Service Call :  "+JSON.stringify(this.familyListHttpCallServiceCall));
        },
        (error) =>{
               console.log("Error Caught in  Component layer");
               this.statusMessage="HTTP Call Error";
            });
        
        
            console.log("Outside Subscribe Method : Http Call Employee List from Service Call :  "+JSON.stringify(this.familyListHttpCallServiceCall));

    }

    employees: IEmployee[] = [
        { code: "emp101", name: "Aditya", age: 25, salary: 4500, gender: "Male" },
        { code: "emp101", name: "Anurag", age: 27, salary: 5000, gender: "Male" },
        { code: "emp103", name: "Komal", age: 23, salary: 3500, gender: "Female" },
        { code: "emp104", name: "Abhishek", age: 24, salary: 2500, gender: "Male" },
        { code: "emp105", name: "Ankit", age: 29, salary: 7500, gender: "Male" }
    ];

    radioButtonValue: string = "all";

    trackbyEmpCode(index: number, employee: IEmployee): string {
        return employee.code;
    }

    getAllNoEmployees(): number {
        return this.employees.length;

    }

    getMaleNoEmployees(): number {
        return this.employees.filter(emp => emp.gender.toLowerCase() == "male").length;

    }

    getFemaleNoEmployees(): number {
        return this.employees.filter(emp => emp.gender.toLowerCase() == "female").length;

    }

    getSelectedRadioButtonValue(radioButtonValueFromChildComponent: string) {
        this.radioButtonValue = radioButtonValueFromChildComponent;
        console.log("Parent Component received radio button value : " + this.radioButtonValue);
    }
    
    cancelSubscription(){
        console.log("Subscription cancelled");
        this.subscription.unsubscribe();
    }
    

}
