import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomeComponent } from './company-home.component';

describe('CompanyHomeComponent', () => {
  let component: CompanyHomeComponent;
  let fixture: ComponentFixture<CompanyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
