import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KembaComponent } from './kemba.component';

describe('KembaComponent', () => {
  let component: KembaComponent;
  let fixture: ComponentFixture<KembaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KembaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KembaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
