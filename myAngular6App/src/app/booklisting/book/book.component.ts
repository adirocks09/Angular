import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    message: string;

    constructor(private bookService: BookService , private router: Router) { }

    ngOnInit() {
    }

    addBook(bookData): void {
        console.log(bookData.bookName);
        console.log(bookData.author);
        console.log(bookData.description);
        this.bookService.addBooks(bookData.bookName, bookData.author, bookData.description).subscribe((response) => {
            this.message = JSON.stringify(response);
            console.log("Success Message : " + this.message)
        },
            (error) => {
                this.message = JSON.stringify(error);
                console.log("Error Message : " + this.message);
            });

        alert("New Book Added !!!!");
        this.router.navigate(['/books']);


    }

}
