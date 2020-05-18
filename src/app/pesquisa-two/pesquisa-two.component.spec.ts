import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaTwoComponent } from './pesquisa-two.component';

describe('PesquisaTwoComponent', () => {
  let component: PesquisaTwoComponent;
  let fixture: ComponentFixture<PesquisaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
