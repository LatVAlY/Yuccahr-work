import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateAccessComponent } from './deactivate-access.component';

describe('DeactivateAccessComponent', () => {
  let component: DeactivateAccessComponent;
  let fixture: ComponentFixture<DeactivateAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
