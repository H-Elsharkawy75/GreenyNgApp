import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedilMediaComponent } from './medil-media.component';

describe('MedilMediaComponent', () => {
  let component: MedilMediaComponent;
  let fixture: ComponentFixture<MedilMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedilMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedilMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
