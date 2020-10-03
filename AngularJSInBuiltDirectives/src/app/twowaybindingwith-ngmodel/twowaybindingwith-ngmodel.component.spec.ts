import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingwithNGModelComponent } from './twowaybindingwith-ngmodel.component';

describe('TwowaybindingwithNGModelComponent', () => {
  let component: TwowaybindingwithNGModelComponent;
  let fixture: ComponentFixture<TwowaybindingwithNGModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaybindingwithNGModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingwithNGModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
