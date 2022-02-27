import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlidreComponent } from './main-slidre.component';

describe('MainSlidreComponent', () => {
  let component: MainSlidreComponent;
  let fixture: ComponentFixture<MainSlidreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSlidreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSlidreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
