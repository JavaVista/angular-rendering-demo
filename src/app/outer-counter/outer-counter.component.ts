import { Component, DoCheck, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { InnerCounterComponent } from '../inner-counter/inner-counter.component';
import { UnrelatedElementComponent } from '../unrelated-element/unrelated-element.component';

@Component({
  selector: 'app-outer-counter',
  imports: [InnerCounterComponent, UnrelatedElementComponent],
  template: `
    <div #contentDiv class="bg-green-900 mt-6 p-4 rounded-md">
      <h2 class="text-2xl text-white">Outer Component Counter passing prop</h2>
      <p class="text-white">Counter: {{ count }}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" (click)="increaseCount()">Increase</button>
      <app-inner-counter [count]="count"></app-inner-counter>
      <app-unrelated-element></app-unrelated-element>
    </div>
  `
})
export class OuterCounterComponent implements DoCheck {
  count = 0;
  private lastCount = -1;

  @ViewChild('contentDiv', { static: true }) contentDiv!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngDoCheck() {
    if (this.count !== this.lastCount) {
      this.lastCount = this.count;
      this.highlightElement(this.contentDiv.nativeElement);
    }
  }

  increaseCount() {
    this.count++;
  }

  private highlightElement(element: HTMLElement) {
    this.renderer.setStyle(element, 'border', '8px solid red');
    setTimeout(() => {
      this.renderer.removeStyle(element, 'border');
    }, 500);
  }
}
