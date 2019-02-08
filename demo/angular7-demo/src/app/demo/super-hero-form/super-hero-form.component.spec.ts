import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroFormComponent } from './super-hero-form.component';

describe('SuperHeroFormComponent', () => {
  let component: SuperHeroFormComponent;
  let fixture: ComponentFixture<SuperHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperHeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
