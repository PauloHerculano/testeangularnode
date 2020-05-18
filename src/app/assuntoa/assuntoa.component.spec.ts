import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoaComponent } from './assuntoa.component';

describe('AssuntoaComponent', () => {
  let component: AssuntoaComponent;
  let fixture: ComponentFixture<AssuntoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
