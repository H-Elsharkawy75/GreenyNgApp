import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysliderHomeComponent } from './categoryslider-home.component';

describe('CategorysliderHomeComponent', () => {
  let component: CategorysliderHomeComponent;
  let fixture: ComponentFixture<CategorysliderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysliderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysliderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
