import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayConnectedComponent } from './stay-connected.component';

describe('StayConnectedComponent', () => {
  let component: StayConnectedComponent;
  let fixture: ComponentFixture<StayConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
