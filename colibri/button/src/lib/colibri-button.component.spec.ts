import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColibriButtonComponent } from './colibri-button.component';

describe('ButtonComponent', () => {
  let component: ColibriButtonComponent;
  let fixture: ComponentFixture<ColibriButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColibriButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColibriButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
