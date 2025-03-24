import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OuterCounterComponent } from './outer-counter/outer-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OuterCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-rendering-demo';
}
