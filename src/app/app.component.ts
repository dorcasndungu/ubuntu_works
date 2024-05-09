import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LeftComponent, RightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'threads-app';
}
