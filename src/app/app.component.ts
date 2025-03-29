import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OuterCounterComponent } from './CoarseRenderingComponents/outer-counter/outer-counter.component';
import { OuterCounterSignalComponent } from './FineGrainedRenderingComponents/outer-counter-signal/outer-counter-signal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OuterCounterComponent, OuterCounterSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ng Rendering Demo';

  // Signal managing the two-way binding demo.
  // Note: Signals are unidirectional by default, so here we manually update
  // the "name" signal via the input event to simulate two-way binding.
  name = signal(''); 

  updateName(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.name.set(newValue);
  }
}
