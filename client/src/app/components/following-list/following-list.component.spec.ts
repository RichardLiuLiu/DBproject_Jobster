import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingListComponent } from './following-list.component';

describe('FollowingListComponent', () => {
  let component: FollowingListComponent;
  let fixture: ComponentFixture<FollowingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
