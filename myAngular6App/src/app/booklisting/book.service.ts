import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../booklisting/ibook';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Adi1234',
    'MyHeader': 'Aditya Kaa Header'

  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<IBook[]> {
            return this.httpClient.get<IBook[]>('http://localhost:2080/dummyAngularSpringBoot/springboot/getAllBooks');
    }

 addBooks(name,author,description): Observable<string>{
          return this.httpClient.post<string>('http://localhost:2080/dummyAngularSpringBoot/springboot/saveBook' ,
          {
	            "name":name,
	            "author": author,
	            "description":description
          },
          httpHeader)
 }

 }
