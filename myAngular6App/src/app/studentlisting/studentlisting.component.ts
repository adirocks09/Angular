import { Component, OnInit } from '@angular/core';
import {IStudent} from './istudent';
import {StudentService} from './student.service';

@Component({
  selector: 'app-studentlisting',
  templateUrl: './studentlisting.component.html',
  styleUrls: ['./studentlisting.component.css']
})
export class StudentlistingComponent implements OnInit {

 constructor(private studentService: StudentService) { }

 students: IStudent[];

  ngOnInit() {
      this.studentService.getStudents().subscribe((studentData) => {
          this.students = studentData;
         // console.log(studentData);
      });
  }

  refresh(): void {
    window.location.reload();
}
}
