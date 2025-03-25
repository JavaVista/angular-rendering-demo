import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedElementSignalComponent } from './unrelated-element-signal.component';

describe('UnrelatedElementComponent', () => {
  let component: UnrelatedElementSignalComponent;
  let fixture: ComponentFixture<UnrelatedElementSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedElementSignalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnrelatedElementSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
