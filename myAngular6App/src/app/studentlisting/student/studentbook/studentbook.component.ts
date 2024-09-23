import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../../../booklisting/ibook';
import { StudentService } from '../../student.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentPopUpComponent } from './student-pop-up/student-pop-up.component';
import { NgprimeStudentPopUpComponent } from './ngprime-student-pop-up/ngprime-student-pop-up.component';
import { DialogService } from 'primeng/api';


@Component({
    selector: 'app-studentbook',
    templateUrl: './studentbook.component.html',
    styleUrls: ['./studentbook.component.css']
})
export class StudentbookComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService, private modalService: NgbModal, public dialogService: DialogService) { }

    id: number;
    booksForStudent: IBook[];

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params['studentId'];
        this.studentService.getBookForStudents(this.id).subscribe((studentBook) => {
            this.booksForStudent = studentBook;
            console.log("SUCCESS : " + studentBook);
        },
            (error) => {
                console.log("ERROR : " + error);
            });
    }

    refresh(): void {
        window.location.reload();
    }

    openPopUp(): void {
        console.log("pop-up !!!");
        const modalRef = this.modalService.open(StudentPopUpComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.studentId = this.id;
    }

    openPopUpPrimeNg(): void {
        const ref = this.dialogService.open(NgprimeStudentPopUpComponent, {
            data: {
                studentId: this.id, // passing data to the pop up window
            },
            header: 'Choose Books !!!!',
             width: '70%',
             height: '10%x'
        });


    }

}
