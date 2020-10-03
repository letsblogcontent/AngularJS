import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassandngstyleComponent } from './ngclassandngstyle.component';

describe('NgclassandngstyleComponent', () => {
  let component: NgclassandngstyleComponent;
  let fixture: ComponentFixture<NgclassandngstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassandngstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassandngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
