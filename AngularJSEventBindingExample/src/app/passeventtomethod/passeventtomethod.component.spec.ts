import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseventtomethodComponent } from './passeventtomethod.component';

describe('PasseventtomethodComponent', () => {
  let component: PasseventtomethodComponent;
  let fixture: ComponentFixture<PasseventtomethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseventtomethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseventtomethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
