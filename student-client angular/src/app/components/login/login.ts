import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  error = signal('');

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login(this.email(), this.password()).subscribe({
      next: res => {
        if (res.token) {
          this.router.navigate(['/students']);
        } else {
          this.error.set('Invalid credentials');
        }
      },
      error: err => {
        console.error('Login failed', err);
        this.error.set('Login failed. Try again.');
      }
    });
  }
}
