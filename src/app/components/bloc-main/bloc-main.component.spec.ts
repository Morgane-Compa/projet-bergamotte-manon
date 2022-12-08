import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocMainComponent } from './bloc-main.component';

describe('BlocMainComponent', () => {
  let component: BlocMainComponent;
  let fixture: ComponentFixture<BlocMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
