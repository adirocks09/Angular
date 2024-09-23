import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../../student.service';
import { IBook } from '../../../../booklisting/ibook';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-student-pop-up',
    templateUrl: './student-pop-up.component.html',
    styleUrls: ['./student-pop-up.component.css']
})
export class StudentPopUpComponent implements OnInit {

    @Input()
    studentId: number;

    availableBooks: IBook[];
    selectedBooks: string[] = [];
    addBooks: string[] = [];
    message: string;

    constructor(public activeModal: NgbActiveModal, private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("inside popup");
    }

    ngOnInit() {


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
        this.activeModal.close('Close click');
    }

}
