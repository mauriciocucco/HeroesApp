import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      mat-toolbar span {
        display: block;
        margin: 0 auto;
      }
      .container {
        margin: 10px;
      }
      .bienvenida {
        margin-right: 5px !important;
        font-size: 14px;
      }
    `,
  ],
})
export class HomeComponent {
  get usuario() {
    return this.authService.usuario;
  }

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
