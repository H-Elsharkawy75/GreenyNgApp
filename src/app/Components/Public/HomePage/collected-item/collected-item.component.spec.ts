import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedItemComponent } from './collected-item.component';

describe('CollectedItemComponent', () => {
  let component: CollectedItemComponent;
  let fixture: ComponentFixture<CollectedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
