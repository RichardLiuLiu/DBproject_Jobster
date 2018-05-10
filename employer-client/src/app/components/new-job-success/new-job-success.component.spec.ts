import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobSuccessComponent } from './new-job-success.component';

describe('NewJobSuccessComponent', () => {
  let component: NewJobSuccessComponent;
  let fixture: ComponentFixture<NewJobSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
