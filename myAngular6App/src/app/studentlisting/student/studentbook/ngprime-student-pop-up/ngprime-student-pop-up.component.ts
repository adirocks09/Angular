import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../student.service';
import { IBook } from '../../../../booklisting/ibook';
import { DynamicDialogRef } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/api';

@Component({
    selector: 'app-ngprime-student-pop-up',
    templateUrl: './ngprime-student-pop-up.component.html',
    styleUrls: ['./ngprime-student-pop-up.component.css']
})
export class NgprimeStudentPopUpComponent implements OnInit {

    studentId: number;
    availableBooks: IBook[];
    selectedBooks: string[] = [];
    addBooks: string[] = [];
    message: string;

    constructor(private studentService: StudentService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {

        this.studentId = this.config.data.studentId;
        console.log("PrimeNG :  "+ JSON.stringify(this.config.data) );

        this.studentService.getAvailableBookForStudents(this.studentId).subscribe((availableStudentBook) => {
            this.availableBooks = availableStudentBook;
            console.log("SUCCESS : " + availableStudentBook);
        },
            (error) => {
                console.log("ERROR : " + error);
            });
    }

    addAvailableBooks(event): void {
        console.log(JSON.stringify(this.selectedBooks));
        this.studentService.saveBookForStudent(this.studentId, this.selectedBooks).subscribe((response) => {
            this.message = response;
            console.log("SUCCESS : " + response);
        },
            (error) => {
                console.log("ERROR : " + error);
            });
        alert("New Book Added to the Student!!!!");
        this.ref.close();
    }

}
