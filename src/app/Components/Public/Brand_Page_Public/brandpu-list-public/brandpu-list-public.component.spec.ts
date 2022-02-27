import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandpuListPublicComponent } from './brandpu-list-public.component';

describe('BrandpuListPublicComponent', () => {
  let component: BrandpuListPublicComponent;
  let fixture: ComponentFixture<BrandpuListPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandpuListPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandpuListPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
