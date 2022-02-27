import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOurTeamComponent } from './public-our-team.component';

describe('PublicOurTeamComponent', () => {
  let component: PublicOurTeamComponent;
  let fixture: ComponentFixture<PublicOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOurTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
