import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCounterComponent } from './inner-counter.component';

describe('InnerCounterComponent', () => {
  let component: InnerCounterComponent;
  let fixture: ComponentFixture<InnerCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
