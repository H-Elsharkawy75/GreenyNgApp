import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptonPublicComponent } from './subscripton-public.component';

describe('SubscriptonPublicComponent', () => {
  let component: SubscriptonPublicComponent;
  let fixture: ComponentFixture<SubscriptonPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptonPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptonPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
