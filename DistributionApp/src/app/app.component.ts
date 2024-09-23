import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fName:string = "First Name";
  mName:string = "Middle Name";
  lName:string = "Last Name";
  fNameChanged(event:any):void{
    console.log(this.fName);
    console.log(event.target.value);

  }

}
