import { Component, OnInit } from '@angular/core';
import { IBook } from '../../booklisting/ibook';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-student-existing-book',
    templateUrl: './student-existing-book.component.html',
    styleUrls: ['./student-existing-book.component.css']
})
export class StudentExistingBookComponent implements OnInit {

    id: number;
    bookId: string;
    availableBooks: IBook[];
    selectedBooks: string[] = [];
    addBooks: string[] = [];
    message: string;

    //color: string;
    //color1: string;
    //color2: string = '#1976D2';

    constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService , private router: Router) { }

    ngOnInit() {

        this.id = this.activatedRoute.snapshot.params['studentId'];  // Capturing Path Variable from the URL

        this.studentService.getAvailableBookForStudents(this.id).subscribe((availableStudentBook) => {
            this.availableBooks = availableStudentBook;
            console.log("SUCCESS : " + availableStudentBook);
        },
            (error) => {
                console.log("ERROR : " + error);
            });
    }


    addAvailableBooks(event): void {
        console.log(JSON.stringify(this.selectedBooks));
        this.studentService.saveBookForStudent(this.id, this.selectedBooks).subscribe((response) => {
            this.message = response;
            console.log("SUCCESS : " + response);
        },
            (error) => {
                console.log("ERROR : " + error);
            });
        alert("New Book Added to the Student!!!!");
        this.router.navigate(['/students/viewBooks', this.id]); // redirecting to a different page : path mentioned here is absolute URL Path

    }

}
