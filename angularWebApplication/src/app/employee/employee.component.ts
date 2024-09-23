import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name : string = "Anurag Anand";
  name2: string = "Tom";
  
  classesToApply : string ="colorClass fontClass";
  
  printMessage() : void {
    console.log("Method Works!!");
  }
  
  num1 : string = "3.5";
  num2 : string = "4.5";
  sum : number = 0.0;
  addNum(): any {
    console.log("Calculating Sum");
    this.sum=parseFloat(this.num1)+parseFloat(this.num2);
  }
  
}
