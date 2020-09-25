import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsSettingsComponent } from './billings-settings.component';

describe('BillingsSettingsComponent', () => {
  let component: BillingsSettingsComponent;
  let fixture: ComponentFixture<BillingsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
