import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUSPublicComponent } from './about-us-public.component';

describe('AboutUSPublicComponent', () => {
  let component: AboutUSPublicComponent;
  let fixture: ComponentFixture<AboutUSPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUSPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUSPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
