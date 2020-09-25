import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedAccessComponent } from './activated-access.component';

describe('ActivatedAccessComponent', () => {
  let component: ActivatedAccessComponent;
  let fixture: ComponentFixture<ActivatedAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
