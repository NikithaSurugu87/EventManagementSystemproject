import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomeComponent } from './admin-home.component';

describe('AdminHomeComponent', () => {
  let component: AdminhomeComponent;
  let fixture: ComponentFixture<AdminhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
