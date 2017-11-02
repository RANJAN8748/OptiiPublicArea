import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleannesslevelComponent } from './cleannesslevel.component';

describe('CleannesslevelComponent', () => {
  let component: CleannesslevelComponent;
  let fixture: ComponentFixture<CleannesslevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleannesslevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleannesslevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
