import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListModalComponent } from './friend-list-modal.component';

describe('FriendListModalComponent', () => {
  let component: FriendListModalComponent;
  let fixture: ComponentFixture<FriendListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
