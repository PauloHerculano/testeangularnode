import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaysonComponent } from './jayson.component';

describe('JaysonComponent', () => {
  let component: JaysonComponent;
  let fixture: ComponentFixture<JaysonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaysonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
