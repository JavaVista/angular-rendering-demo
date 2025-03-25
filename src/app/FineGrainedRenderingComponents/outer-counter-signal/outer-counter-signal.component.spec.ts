import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterCounterSignalComponent } from './outer-counter-signal.component';

describe('OuterCounterComponent', () => {
  let component: OuterCounterSignalComponent;
  let fixture: ComponentFixture<OuterCounterSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterCounterSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterCounterSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
