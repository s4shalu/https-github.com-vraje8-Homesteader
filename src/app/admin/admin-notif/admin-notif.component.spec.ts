import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotifComponent } from './admin-notif.component';

describe('AdminNotifComponent', () => {
  let component: AdminNotifComponent;
  let fixture: ComponentFixture<AdminNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
