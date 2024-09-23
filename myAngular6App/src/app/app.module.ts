import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';





import { StudentService } from './studentlisting/student.service';
import { BookService } from './booklisting/book.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from '../../node_modules/primeng/components/checkbox/checkbox';
import { TabViewModule } from '../../node_modules/primeng/components/tabview/tabview';
import { CodeHighlighterModule } from '../../node_modules/primeng/components/codehighlighter/codehighlighter';
import { ColorPickerModule } from '../../node_modules/primeng/colorpicker';
import { ButtonModule } from '../../node_modules/primeng/button';
import { DialogService} from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { StudentlistingComponent } from './studentlisting/studentlisting.component';
import { StudentComponent } from './studentlisting/student/student.component';
import { StudentbookComponent } from './studentlisting/student/studentbook/studentbook.component';
import { BookComponent } from './booklisting/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentExistingBookComponent } from './studentlisting/student-existing-book/student-existing-book.component';
import { StudentPopUpComponent } from './studentlisting/student/studentbook/student-pop-up/student-pop-up.component';
import { NgprimeStudentPopUpComponent } from './studentlisting/student/studentbook/ngprime-student-pop-up/ngprime-student-pop-up.component';


@NgModule({
    declarations: [
        AppComponent,
        BooklistingComponent,
        StudentlistingComponent,
        StudentComponent,
        StudentbookComponent,
        BookComponent,
        StudentExistingBookComponent,
        StudentPopUpComponent,
        NgprimeStudentPopUpComponent
    ],
    entryComponents: [StudentPopUpComponent,
                      NgprimeStudentPopUpComponent,
                    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CheckboxModule,
        TabViewModule,
        CodeHighlighterModule,
        ColorPickerModule,
        ButtonModule,
        NgbModule,
        DynamicDialogModule,
        ScrollPanelModule,
        PaginatorModule,
        TableModule
    ],
    providers: [StudentService, BookService , DialogService],
    bootstrap: [AppComponent]
})
export class AppModule { }
