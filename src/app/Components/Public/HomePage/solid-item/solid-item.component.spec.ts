import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidItemComponent } from './solid-item.component';

describe('SolidItemComponent', () => {
  let component: SolidItemComponent;
  let fixture: ComponentFixture<SolidItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
