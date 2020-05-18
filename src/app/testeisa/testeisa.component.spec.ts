import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteisaComponent } from './testeisa.component';

describe('TesteisaComponent', () => {
  let component: TesteisaComponent;
  let fixture: ComponentFixture<TesteisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
