import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptreasonsComponent } from './interruptreasons.component';

describe('InterruptreasonsComponent', () => {
  let component: InterruptreasonsComponent;
  let fixture: ComponentFixture<InterruptreasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptreasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptreasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
