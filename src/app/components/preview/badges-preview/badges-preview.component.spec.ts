import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesPreviewComponent } from './badges-preview.component';

describe('BadgesPreviewComponent', () => {
  let component: BadgesPreviewComponent;
  let fixture: ComponentFixture<BadgesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgesPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
