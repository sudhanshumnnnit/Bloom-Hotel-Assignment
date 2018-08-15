import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteComponent } from './crete.component';

describe('CreteComponent', () => {
  let component: CreteComponent;
  let fixture: ComponentFixture<CreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
