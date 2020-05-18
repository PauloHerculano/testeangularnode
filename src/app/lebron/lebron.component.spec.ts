import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebronComponent } from './lebron.component';

describe('LebronComponent', () => {
  let component: LebronComponent;
  let fixture: ComponentFixture<LebronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
