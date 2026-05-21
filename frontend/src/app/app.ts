import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡IMPORTANTE!
import { RouterOutlet } from '@angular/router';   // <-- ¡IMPORTANTE!
import { DashboardComponent } from './components/dashboard.component';
import { TicketFormComponent } from './components/ticket-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    TicketFormComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'frontend';
}
