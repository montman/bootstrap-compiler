import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSettingsComponent } from './bs-settings.component';

describe('BsSettingsComponent', () => {
  let component: BsSettingsComponent;
  let fixture: ComponentFixture<BsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BsSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
