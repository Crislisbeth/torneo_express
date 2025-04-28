import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, // Si tu componente es standalone, asegúrate de tener esto
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  idiomaActual = 'Español';
  mostrarIdiomas = false;

  constructor(private router: Router) {}

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  toggleIdiomaDropdown() {
    this.mostrarIdiomas = !this.mostrarIdiomas;
  }

  cambiarIdioma(idioma: string) {
    this.idiomaActual = idioma;
    this.mostrarIdiomas = false;
  }

  cerrarDropdown() {
    setTimeout(() => {
      this.mostrarIdiomas = false;
    }, 200);
  }
}
