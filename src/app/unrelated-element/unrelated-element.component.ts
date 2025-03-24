import { Component } from '@angular/core';

@Component({
  selector: 'app-unrelated-element',
  imports: [],
  template: `
    <div class="bg-green-300 mt-6 p-4 rounded-md my-2">
     <h2 class="text-2xl font-semibold text-gray-800">Unrelated Component</h2>
      <p>Unrelated content...</p>
    </div>
  `,
  styleUrl: './unrelated-element.component.scss'
})
export class UnrelatedElementComponent {

}
