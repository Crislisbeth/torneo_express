import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.css'],
  imports: [CommonModule], // Añade esta línea
  standalone: true // Asegúrate de que el componente sea standalone
})
export class MediaLibraryComponent {
  searchQuery: string = '';
  showDropdown: boolean = false;
  categories: string[] = [
    'Vectores', 'Ilustraciones', 'Fotos', 'Íconos', 'Videos', 'PSD', 'Plantillas', 'Mockups'
  ];
  
  creationOptions = [
    { title: 'Generar imágenes', description: 'Transforma tus palabras en imágenes en tiempo real' },
    { title: 'Generador de mockups', description: 'Materializa tus diseños con total facilidad' },
    { title: 'Generador de videos IA', description: 'Crea videos impresionantes a partir de texto o imágenes' },
    { title: 'Generador de iconos IA', description: 'Crea stickers e íconos en segundos' }
  ];

  /**
   * Maneja la entrada de texto en el campo de búsqueda.
   */
  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }

  /**
   * Oculta el menú desplegable con un pequeño retraso para evitar cierres bruscos.
   */
  hideDropdown(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
}
