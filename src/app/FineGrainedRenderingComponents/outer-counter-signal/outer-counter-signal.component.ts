import { Component, DoCheck, ElementRef, Renderer2, signal, ViewChild } from '@angular/core';
import { InnerCounterSignalComponent } from '../inner-counter-signal/inner-counter-signal.component';
import { UnrelatedElementSignalComponent } from '../unrelated-element-signal/unrelated-element-signal.component';

@Component({
  selector: 'app-outer-counter-signal',
  imports: [InnerCounterSignalComponent, UnrelatedElementSignalComponent],
  template: `
    <div #contentDiv class="bg-green-900 mt-6 p-4 rounded-md h-full">
      <h2 class="text-2xl text-white">Outer Component Counter passing prop (Signal)</h2>
      <p class="m-4 text-white text-xl overline">Counter: {{ count() }}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded" (click)="increaseCount()">Increase</button>
      <app-inner-counter-signal [count]="count"></app-inner-counter-signal>
      <app-unrelated-element-signal></app-unrelated-element-signal>
    </div>
  `
})
export class OuterCounterSignalComponent {
  count = signal(0);

  @ViewChild('contentDiv', { static: true }) contentDiv!: ElementRef;
  @ViewChild(UnrelatedElementSignalComponent) unrelatedComponent!: UnrelatedElementSignalComponent;

  constructor(private renderer: Renderer2) { }

  increaseCount() {
    this.count.update(c => c + 1);
    this.highlightElement(this.contentDiv.nativeElement);
  }

  private highlightElement(element: HTMLElement) {
    this.renderer.setStyle(element, 'border', '8px solid red');
    setTimeout(() => {
      this.renderer.removeStyle(element, 'border');
    }, 500);
  }
}
