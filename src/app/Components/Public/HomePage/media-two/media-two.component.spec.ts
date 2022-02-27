import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTwoComponent } from './media-two.component';

describe('MediaTwoComponent', () => {
  let component: MediaTwoComponent;
  let fixture: ComponentFixture<MediaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
