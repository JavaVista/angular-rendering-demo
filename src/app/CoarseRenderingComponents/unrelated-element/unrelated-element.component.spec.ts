import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedElementComponent } from './unrelated-element.component';

describe('UnrelatedElementComponent', () => {
  let component: UnrelatedElementComponent;
  let fixture: ComponentFixture<UnrelatedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrelatedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
