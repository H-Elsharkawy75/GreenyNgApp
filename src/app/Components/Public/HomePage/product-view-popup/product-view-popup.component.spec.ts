import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewPopupComponent } from './product-view-popup.component';

describe('ProductViewPopupComponent', () => {
  let component: ProductViewPopupComponent;
  let fixture: ComponentFixture<ProductViewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
