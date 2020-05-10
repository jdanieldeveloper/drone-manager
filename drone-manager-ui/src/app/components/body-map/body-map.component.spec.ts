import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMapComponent } from './body-map.component';

describe('BodyMapComponent', () => {
  let component: BodyMapComponent;
  let fixture: ComponentFixture<BodyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
