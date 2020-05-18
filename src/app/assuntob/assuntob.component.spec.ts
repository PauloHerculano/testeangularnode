import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntobComponent } from './assuntob.component';

describe('AssuntobComponent', () => {
  let component: AssuntobComponent;
  let fixture: ComponentFixture<AssuntobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
