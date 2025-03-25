import { Component, DoCheck, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-unrelated-element',
  imports: [],
  template: `
    <div #contentDiv class="bg-green-300 mt-6 p-4 rounded-md my-2">
     <h2 class="text-2xl font-semibold text-gray-800">Unrelated Component</h2>
      <p>Unrelated content...</p>
    </div>
  `
})
export class UnrelatedElementComponent implements DoCheck {
  @ViewChild('contentDiv', { static: true }) contentDiv!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngDoCheck() {
    this.highlightElement(this.contentDiv.nativeElement);
  }

  private highlightElement(element: HTMLElement) {
    this.renderer.setStyle(element, 'border', '8px solid red');
    setTimeout(() => {
      this.renderer.removeStyle(element, 'border');
    }, 500);
  }
}
