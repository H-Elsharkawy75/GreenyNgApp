import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailsPublicComponent } from './category-details-public.component';

describe('CategoryDetailsPublicComponent', () => {
  let component: CategoryDetailsPublicComponent;
  let fixture: ComponentFixture<CategoryDetailsPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDetailsPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
