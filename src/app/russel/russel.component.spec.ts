import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RusselComponent } from './russel.component';

describe('RusselComponent', () => {
  let component: RusselComponent;
  let fixture: ComponentFixture<RusselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RusselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RusselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
