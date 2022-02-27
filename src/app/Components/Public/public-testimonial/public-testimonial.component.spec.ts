import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTestimonialComponent } from './public-testimonial.component';

describe('PublicTestimonialComponent', () => {
  let component: PublicTestimonialComponent;
  let fixture: ComponentFixture<PublicTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
