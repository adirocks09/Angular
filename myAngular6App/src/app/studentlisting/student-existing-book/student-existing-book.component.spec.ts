import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExistingBookComponent } from './student-existing-book.component';

describe('StudentExistingBookComponent', () => {
  let component: StudentExistingBookComponent;
  let fixture: ComponentFixture<StudentExistingBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentExistingBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExistingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
