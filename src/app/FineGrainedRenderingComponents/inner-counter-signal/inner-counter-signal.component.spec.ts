import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCounterSignalComponent } from './inner-counter-signal.component';

describe('InnerCounterComponent', () => {
  let component: InnerCounterSignalComponent;
  let fixture: ComponentFixture<InnerCounterSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerCounterSignalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InnerCounterSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
