import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'frontend';
}
