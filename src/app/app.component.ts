import { Component } from '@angular/core';
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
  title = 'angular-rendering-demo';
}
