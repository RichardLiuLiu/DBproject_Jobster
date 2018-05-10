import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushFilterModalComponent } from './push-filter-modal.component';

describe('PushFilterModalComponent', () => {
  let component: PushFilterModalComponent;
  let fixture: ComponentFixture<PushFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
