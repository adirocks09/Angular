import { Injectable } from '@angular/core';
import { IStudent } from './istudent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../booklisting/ibook';


const httpHeader = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Adi1234',
        'MyHeader': 'Aditya Kaa Header'

    })
};

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private httpClient: HttpClient) { }


    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>('http://localhost:2080/dummyAngularSpringBoot/springboot/getAllStudents');
    }


    getBookForStudents(id: number): Observable<IBook[]> {
        return this.httpClient.get<IBook[]>('http://localhost:2080/dummyAngularSpringBoot/springboot/getAllBooksForStudent/' + id);
    }

    getAvailableBookForStudents(id: number): Observable<IBook[]> {
        return this.httpClient.get<IBook[]>('http://localhost:2080/dummyAngularSpringBoot/springboot/getAvailableBooks/' + id);
    }

    addStudent(name, country): Observable<string> {
        return this.httpClient.post<string>('http://localhost:2080/dummyAngularSpringBoot/springboot/saveStudent',
            {
                "name": name,
                "country": country
            },
            httpHeader);
    }

    saveBookForStudent(id: number, selectedBooks: string[]): Observable<string> {
        return this.httpClient.post<string>('http://localhost:2080/dummyAngularSpringBoot/springboot/saveBookForStudent/' + id,
            selectedBooks,
            httpHeader);
    }
}
