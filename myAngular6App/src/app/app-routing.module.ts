import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { StudentlistingComponent } from './studentlisting/studentlisting.component';
import { StudentComponent } from './studentlisting/student/student.component';
import { StudentbookComponent } from './studentlisting/student/studentbook/studentbook.component';
import { BookComponent } from './booklisting/book/book.component';
import { StudentExistingBookComponent } from './studentlisting/student-existing-book/student-existing-book.component';

// URL Path mentioned here is absolute path (path from root page i.e index.html)

const routes: Routes = [
     {
        path: 'students', component: StudentlistingComponent
    },
    {
        path: 'books', component: BooklistingComponent

    },
    {
        // path: 'students/addNewStudent', component: StudentComponent
        path: 'students/addNewStudent', redirectTo: '/newStudent' , pathMatch: 'full'   // redirection To Different URL
    },
     {
        path: 'newStudent', component: StudentComponent
    },
    {
        path: 'books/addNewBook', component: BookComponent

    },
    {
        path: 'students/viewBooks/:studentId', component: StudentbookComponent

    },
    /* {
        path: 'students/viewBooks/:studentId/:studentName', component: StudentbookComponent

    }, */
    {
        path: 'students/viewBooks/:studentId/addExistingBook', component: StudentExistingBookComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // Hash-Style Routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
