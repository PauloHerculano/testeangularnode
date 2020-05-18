import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyrieComponent } from './kyrie.component';

describe('KyrieComponent', () => {
  let component: KyrieComponent;
  let fixture: ComponentFixture<KyrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
