import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobListComponent } from './company-job-list.component';

describe('CompanyJobListComponent', () => {
  let component: CompanyJobListComponent;
  let fixture: ComponentFixture<CompanyJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
