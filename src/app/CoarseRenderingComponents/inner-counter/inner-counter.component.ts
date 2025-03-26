import { Component, DoCheck, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inner-counter',
  imports: [],
  template: `
    <div #contentDiv class="bg-green-600 mt-6 p-4 rounded-md my-2">
      <h2 class="text-2xl text-white">Inner Component Counter receiving prop</h2>
      <p class="m-4 text-white text-xl overline">Counter: {{ count }}</p>
    </div>
  `
})
export class InnerCounterComponent implements DoCheck {
  @Input() count = 0;
  private lastCount = -1;

  @ViewChild('contentDiv', { static: true }) contentDiv!: ElementRef;

  constructor(private renderer: Renderer2) { }

  // Demonstrates that ngDoCheck (change detection) runs when the @Input() 'count' changes.
  ngDoCheck() {
    if (this.count !== this.lastCount) {
      this.lastCount = this.count;
      // Highlight when the input changes.
      this.highlightElement(this.contentDiv.nativeElement);
    }
  }

  private highlightElement(element: HTMLElement) {
    this.renderer.setStyle(element, 'border', '8px solid red');
    setTimeout(() => {
      this.renderer.removeStyle(element, 'border');
    }, 500);
  }
}
