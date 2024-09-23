import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopUpComponent } from './student-pop-up.component';

describe('StudentPopUpComponent', () => {
  let component: StudentPopUpComponent;
  let fixture: ComponentFixture<StudentPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
