import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocMain2Component } from './bloc-main2.component';

describe('BlocMain2Component', () => {
  let component: BlocMain2Component;
  let fixture: ComponentFixture<BlocMain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocMain2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
