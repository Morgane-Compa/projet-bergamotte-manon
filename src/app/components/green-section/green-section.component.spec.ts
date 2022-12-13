import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSectionComponent } from './green-section.component';

describe('GreenSectionComponent', () => {
  let component: GreenSectionComponent;
  let fixture: ComponentFixture<GreenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
