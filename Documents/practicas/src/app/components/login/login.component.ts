import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FormsModule } from '@angular/forms';  // Importa FormsModule para ngModel

@Component({
  selector: 'app-login',
  standalone: true,  // Configura el componente como standalone
  imports: [CommonModule, FormsModule],  // Agrega CommonModule y FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordVisible: boolean = false;
  usuario = {
    contrasena: ''
  };

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  onSubmit() {
    console.log('Formulario enviado', this.usuario);
  }
}
