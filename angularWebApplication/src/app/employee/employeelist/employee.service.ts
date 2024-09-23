import { Injectable } from '@angular/core';
import {Http,Response } from "@angular/http";
import { IEmployee } from "../iemployee";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { IFamily } from "../ifamily";


@Injectable()
export class EmployeeService {
    
    empHardCodedList : IEmployee[];
    familyHttpList : IFamily[];

    constructor(private http : Http) {

    }


    getHardCodedList(): IEmployee[] {
        this.empHardCodedList= [
        { code: "emp108", name: "Rishu", age: 25, salary: 8300, gender: "Male" },
        { code: "emp109", name: "Happy", age: 29, salary: 6700, gender: "Female" }
    ];
        return this.empHardCodedList;
    }
    
    getHttpCallList(): Observable<IFamily[]> {
        return this.http.get("http://localhost:8080/angularSpringboot/getList")
                            .map((sucessData:Response)=><IFamily[]>sucessData.json())   // throws Observable<IFamily[]> in case of success
                            .catch((errorData:Response)=>this.handleError(errorData));  // throws Observable<Error> in case of error
    }
    
    handleError(error:Response){
        console.log("Error caught in Service Layer");
        return Observable.throw(error);
        }
    
}
