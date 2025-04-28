import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de la interfaz Articulo
interface Articulo {
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-ilustraciones',
  standalone: true,
  templateUrl: './ilustraciones.component.html',
  styleUrls: ['./ilustraciones.component.css'],
  imports: [CommonModule]
})
export class IlustracionesComponent {
  // Imágenes de ilustraciones
  imagenes: string[] = [
    'assets/ilustraciones/1.jpg',
    'assets/ilustraciones/2.jpg',
    'assets/ilustraciones/3.jpg',
    'assets/ilustraciones/4.jpg',
    'assets/ilustraciones/5.jpg',
    'assets/ilustraciones/6.jpg'
  ];

  // Categorías de ilustraciones
  categorias = [
    { nombre: 'Ilustraciones De Flores', imagen: 'assets/categorias/flores.png' },
    { nombre: 'Ilustraciones De Gato', imagen: 'assets/categorias/gato.png' },
    { nombre: 'Ilustraciones De Dragon', imagen: 'assets/categorias/dragon.png' },
    { nombre: 'Ilustraciones De Animales', imagen: 'assets/categorias/animales.png' },
    { nombre: 'Ilustraciones De Perro', imagen: 'assets/categorias/perro.png' },
    { nombre: 'Ilustraciones De Mar', imagen: 'assets/categorias/mar.png' },
    { nombre: 'Ilustraciones De Árbol', imagen: 'assets/categorias/arbol.png' },
    { nombre: 'Ilustraciones De Bosque', imagen: 'assets/categorias/bosque.png' },
    { nombre: 'Ilustraciones De Luna', imagen: 'assets/categorias/luna.png' },
    { nombre: 'Ilustraciones De Plantas', imagen: 'assets/categorias/plantas.png' },
    { nombre: 'Ilustraciones De Sol', imagen: 'assets/categorias/sol.png' },
    { nombre: 'Ilustración Del Pachamama', imagen: 'assets/categorias/pachamama.png' },
  ];

  // Estados para preguntas frecuentes (FAQ)
  faqStates: boolean[] = [false, false, false, false];

  // Método para alternar la visibilidad de cada respuesta
  toggleFaq(index: number): void {
    this.faqStates[index] = !this.faqStates[index];
  }

  // Artículos relacionados
  articulos: Articulo[] = [
    {
      imagen: 'assets/images/equilibrio-arte.jpg',
      titulo: 'El equilibrio en el arte: definición, tipos e importancia',
      descripcion: 'Descubre el equilibrio en el arte,definición, tipos, ejemplos y cómo utilizarlo en tus proyectos de diseño.'
    },
    {
      imagen: 'assets/images/colores-pastel.jpg',
      titulo: 'Colores pastel, qué son y mejores ejemplos',
      descripcion: 'Descubre los mejores ejemplos de colores pastel con combinaciones de tonos suaves y claros para crear diseños llamativos e increíbles.'
    },
    {
      imagen: 'assets/images/combinaciones-colores.jpg',
      titulo: '10 combinaciones de colores para tus diseños',
      descripcion: 'Descubre las mejores combinaciones de color para tus proyectos. Inspírate en estas combinaciones de colores para crear diseños innovadores y creativos.'
    }
  ];

  // Estado para el panel de búsqueda
  isSearchPanelVisible = false;

  toggleSearchPanel(event: Event): void {
    event.stopPropagation();
    this.isSearchPanelVisible = !this.isSearchPanelVisible;
  }

  @HostListener('document:click')
  hideSearchPanel(): void {
    this.isSearchPanelVisible = false;
  }
}