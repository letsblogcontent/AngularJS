import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaypropertychangeComponent } from './twowaypropertychange.component';

describe('TwowaypropertychangeComponent', () => {
  let component: TwowaypropertychangeComponent;
  let fixture: ComponentFixture<TwowaypropertychangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaypropertychangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaypropertychangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
