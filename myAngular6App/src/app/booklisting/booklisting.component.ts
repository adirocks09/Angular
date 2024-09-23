import { Component, OnInit } from '@angular/core';
import {IBook} from './ibook';
import {BookService} from './book.service';

@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {

  books: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
      this.bookService.getBooks().subscribe((bookData) => {
          this.books = bookData;
          // console.log(bookData);
      });
  }

refresh(): void {
    window.location.reload();
}

}
