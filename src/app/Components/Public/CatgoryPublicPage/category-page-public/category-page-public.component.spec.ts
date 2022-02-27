import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPagePublicComponent } from './category-page-public.component';

describe('CategoryPagePublicComponent', () => {
  let component: CategoryPagePublicComponent;
  let fixture: ComponentFixture<CategoryPagePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPagePublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPagePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
