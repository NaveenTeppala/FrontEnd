import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandManagementComponent } from './band-management.component';

describe('BandManagementComponent', () => {
  let component: BandManagementComponent;
  let fixture: ComponentFixture<BandManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandManagementComponent]
    });
    fixture = TestBed.createComponent(BandManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
