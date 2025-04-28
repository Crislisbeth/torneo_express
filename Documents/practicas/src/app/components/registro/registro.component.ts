import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegistroComponent {
  // ✅ Inyección del Router para navegación
  private router = inject(Router);

  usuario = {
    nombreCompleto: '',
    correoElectronico: '',
    contrasena: '',
    confirmarContrasena: '',
    esCreador: false
  };

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility(field: string) {
    if (field === 'contrasena') {
      this.passwordVisible = !this.passwordVisible;
    } else if (field === 'confirmarContrasena') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

  navegarAInicioSesion() {
    this.router.navigate(['/login']);
  }

  registrarUsuario() {
    if (this.usuario.contrasena !== this.usuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Usuario registrado:', this.usuario);

    if (this.usuario.esCreador) {
      this.router.navigate(['/terminos-creador']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}