import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  user = signal({ email: '', password: '' });
  error = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user().email, this.user().password).subscribe({
      next: () => {
        console.log('User registered successfully');
        this.router.navigate(['/login']); // redirect to login after registration
      },
      error: err => {
        console.error('Registration failed', err);
        this.error.set('Registration failed. Try again.');
      }
    });
  }
}
