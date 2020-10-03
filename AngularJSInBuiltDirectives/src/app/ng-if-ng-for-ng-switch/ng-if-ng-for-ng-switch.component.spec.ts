import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgForNgSwitchComponent } from './ng-if-ng-for-ng-switch.component';

describe('NgIfNgForNgSwitchComponent', () => {
  let component: NgIfNgForNgSwitchComponent;
  let fixture: ComponentFixture<NgIfNgForNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfNgForNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgForNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
