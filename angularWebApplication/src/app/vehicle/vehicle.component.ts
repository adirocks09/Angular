import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

    vehicleName: string = "Ferrari";
    vehicleNumber: number = 555;
    vehicleColor: string = "blue";
    
    constructor() { }

    ngOnInit() {
    }

    changeProperties(){
        this.vehicleName=this.vehicleName+"x";
        this.vehicleNumber=this.vehicleNumber+5;
        this.vehicleColor=this.vehicleColor+"r";

        }
    
}
