import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    message: string;

    constructor(private studentService: StudentService, private router: Router) { }

    ngOnInit() {
    }


    addStudent(studentData): void {
        console.log(studentData.studentName);
        console.log(studentData.country);
        this.studentService.addStudent(studentData.studentName, studentData.country).subscribe((response) => {
            this.message = JSON.stringify(response);
            console.log("Success Message : " + this.message);
        },
            (error) => {
                this.message = JSON.stringify(error);
                console.log("Error Message : " + this.message);
            });
        alert("New Student Added !!!!");
        this.router.navigate(['/students']);
    }

}
