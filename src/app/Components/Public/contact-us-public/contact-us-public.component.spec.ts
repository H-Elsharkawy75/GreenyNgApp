import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUSPublicComponent } from './contact-us-public.component';

describe('ContactUSPublicComponent', () => {
  let component: ContactUSPublicComponent;
  let fixture: ComponentFixture<ContactUSPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUSPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUSPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
