import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageReadOnlyComponent } from 'src/app/shared/components/image-read-only/image-read-only.component';

describe('ImageReadOnlyComponent', () => {
  let component: ImageReadOnlyComponent;
  let fixture: ComponentFixture<ImageReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
