import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigutarionComponent } from './configutarion.component';

describe('ConfigutarionComponent', () => {
  let component: ConfigutarionComponent;
  let fixture: ComponentFixture<ConfigutarionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigutarionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigutarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
