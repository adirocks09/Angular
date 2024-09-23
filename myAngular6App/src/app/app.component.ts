import { Component } from '@angular/core';
import data from '../assets/data2.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringBoot Angular Integration with Single Deployment';
  dataList;

  ngOnInit(){

    this.dataList = data;

  }
}
