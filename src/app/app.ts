import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html'
})
export class App {
  constructor(public auth: AuthService) {}

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
