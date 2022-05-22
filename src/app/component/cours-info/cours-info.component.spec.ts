import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursInfoComponent } from './cours-info.component';

describe('CoursInfoComponent', () => {
  let component: CoursInfoComponent;
  let fixture: ComponentFixture<CoursInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
