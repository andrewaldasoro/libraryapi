import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutPreviousComponent } from './check-out-previous.component';

describe('CheckOutPreviousComponent', () => {
  let component: CheckOutPreviousComponent;
  let fixture: ComponentFixture<CheckOutPreviousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutPreviousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
