import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiannisComponent } from './giannis.component';

describe('GiannisComponent', () => {
  let component: GiannisComponent;
  let fixture: ComponentFixture<GiannisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiannisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiannisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
