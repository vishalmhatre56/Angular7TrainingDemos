import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMessageTwoComponent } from './compose-message-two.component';

describe('ComposeMessageComponent', () => {
  let component: ComposeMessageTwoComponent;
  let fixture: ComponentFixture<ComposeMessageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMessageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMessageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
