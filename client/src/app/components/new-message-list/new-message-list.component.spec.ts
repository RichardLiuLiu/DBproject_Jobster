import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageListComponent } from './new-message-list.component';

describe('NewMessageListComponent', () => {
  let component: NewMessageListComponent;
  let fixture: ComponentFixture<NewMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
