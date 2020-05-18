import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeTwoComponent } from './playe-two.component';

describe('PlayeTwoComponent', () => {
  let component: PlayeTwoComponent;
  let fixture: ComponentFixture<PlayeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
