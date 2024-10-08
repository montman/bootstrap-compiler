import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPreviewComponent } from './button-preview.component';

describe('ButtonPreviewComponent', () => {
  let component: ButtonPreviewComponent;
  let fixture: ComponentFixture<ButtonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
