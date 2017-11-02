import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingarrangementsComponent } from './workingarrangements.component';

describe('WorkingarrangementsComponent', () => {
  let component: WorkingarrangementsComponent;
  let fixture: ComponentFixture<WorkingarrangementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingarrangementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingarrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
