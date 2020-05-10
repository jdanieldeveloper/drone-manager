import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFilterComponent } from './body-filter.component';

describe('HeaderFilterComponent', () => {
  let component: BodyFilterComponent;
  let fixture: ComponentFixture<BodyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
