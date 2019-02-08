import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissincontrolComponent } from './missincontrol.component';

describe('MissincontrolComponent', () => {
  let component: MissincontrolComponent;
  let fixture: ComponentFixture<MissincontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissincontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissincontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
