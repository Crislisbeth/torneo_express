import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-creador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminos-creador.component.html',
  styleUrls: ['./terminos-creador.component.css']
})
export class TerminosCreadorComponent {
  constructor(private router: Router) {}

aceptar() {
  // Puedes redirigir a donde gustes después de aceptar
  this.router.navigate(['/home']);
}
}
