import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plantillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css'],
})
export class PlantillasComponent {
  formatos = [
    { nombre: 'Publicación de Instagram', img: 'assets/icons/instagram.svg' },
    { nombre: 'Historia de Instagram', img: 'assets/icons/story.svg' },
    { nombre: 'Publicación de Facebook', img: 'assets/icons/facebook.svg' },
  ];
}
