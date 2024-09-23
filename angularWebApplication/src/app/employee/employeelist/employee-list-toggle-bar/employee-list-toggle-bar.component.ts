import { Component, OnInit ,Input ,Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-list-toggle-bar',
    templateUrl: './employee-list-toggle-bar.component.html',
    styleUrls: ['./employee-list-toggle-bar.component.css']
})
export class EmployeeListToggleBarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input()
    male: number;

    @Input()
    female: number;

    @Input()
    all: number;
    
    selectedRadioButtonValue:string="all";

    @Output()
    radioButtonEventEmitter: EventEmitter<string> = new EventEmitter<string>();

    getRadioButtonValue(value:string) {
        console.log("Radio Button Value passed in parametre of function :" +value);
        if(value!=null){
        this.selectedRadioButtonValue=value;
        }
        console.log("Child Component received radio button value :"+this.selectedRadioButtonValue);
        console.log("Event Emitter emitting value to Parent Component");
        this.radioButtonEventEmitter.emit(this.selectedRadioButtonValue);
    }

}
