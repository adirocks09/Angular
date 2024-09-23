import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgprimeStudentPopUpComponent } from './ngprime-student-pop-up.component';

describe('NgprimeStudentPopUpComponent', () => {
  let component: NgprimeStudentPopUpComponent;
  let fixture: ComponentFixture<NgprimeStudentPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgprimeStudentPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgprimeStudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
