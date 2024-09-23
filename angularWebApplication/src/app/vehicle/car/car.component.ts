import { Component, OnInit ,OnChanges ,SimpleChanges , Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit , OnChanges {

  @Input()  
  carName : string ;
    
  @Input()  
  carNumber : number ;
    
  @Input()  
  carColor : string ;  
    
  constructor() {
  console.log("Constructor called");    
  }

  ngOnInit() {
        console.log("NgOnInit called");    
  }
    
  ngOnChanges(changes : SimpleChanges) {
      for(let propertyName in changes){
          let change = changes[propertyName];
          console.log("Changed Property = " +JSON.stringify(change));
          }
  }  

}
