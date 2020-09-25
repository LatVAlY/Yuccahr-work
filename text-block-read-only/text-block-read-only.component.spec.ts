import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockReadOnlyComponent } from 'src/app/shared/components/text-block-read-only/text-block-read-only.component';

describe('TextBlockReadOnlyComponent', () => {
  let component: TextBlockReadOnlyComponent;
  let fixture: ComponentFixture<TextBlockReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlockReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
