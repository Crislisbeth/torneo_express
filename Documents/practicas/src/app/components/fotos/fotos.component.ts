// fotos.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class FotosComponent {
  
  popularSearches: string[] = ['perro', 'chicas', 'amor'];
  showSearchOptions: boolean = false;
  
  search(query: string): void {
    console.log('Buscando:', query);
  }
  
  toggleSearchOptions(show: boolean): void {
    this.showSearchOptions = show;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.search-container') && this.showSearchOptions) {
      this.showSearchOptions = false;
    }
  }
  
  onSearchContainerClick(event: Event): void {
    event.stopPropagation();
  }
    categorias = [
      {
        titulo: 'Personas y emociones',
        imagen: 'assets/fotos/personas.jpg'
      },
      {
        titulo: 'Estilo de vida y bienestar',
        imagen: 'assets/fotos/bienestar.jpg'
      },
      {
        titulo: 'Educación y formación',
        imagen: 'assets/fotos/educacion.jpg'
      },
      {
        titulo: 'Negocios y marketing',
        imagen: 'assets/fotos/negocios.jpg'
      },
      {
        titulo: 'Naturaleza',
        imagen: 'assets/fotos/naturaleza.jpg'
      },
      {
        titulo: 'Comidas y bebida',
        imagen: 'assets/fotos/comida.jpg'
      },
      {
        titulo: 'Deportes',
        imagen: 'assets/fotos/deportes.jpg'
      },
      {
        titulo: 'Industria y tecnología',
        imagen: 'assets/fotos/tecnologia.jpg'
      }
    ];

    series = [
      {
        titulo: 'DJ Nightlife',
        imagenPrincipal: 'assets/fotos/series1/main.jpg',
        numeroImagenes: 50,
        thumbnails: [
          'assets/fotos/series1/1.jpg',
          'assets/fotos/series1/2.jpg',
          'assets/fotos/series1/3.jpg'
        ]
      },
      {
        titulo: 'Mother and Child at Sunset',
        imagenPrincipal: 'assets/fotos/series2/main.jpg',
        numeroImagenes: 65,
        thumbnails: [
          'assets/fotos/series2/1.jpg',
          'assets/fotos/series2/2.jpg',
          'assets/fotos/series2/3.jpg'
        ]
      },
      {
        titulo: 'Friends Picnic',
        imagenPrincipal: 'assets/fotos/series3/main.jpg',
        numeroImagenes: 58,
        thumbnails: [
          'assets/fotos/series3/1.jpg',
          'assets/fotos/series3/2.jpg',
          'assets/fotos/series3/3.jpg'
        ]
      }
    ];
    
    colecciones = [
      {
        titulo: 'Lifestyle',
        recursos: 150,
        destacada: false,
        imagenes: [
          'assets/fotos/lifestyle1.jpg',
          'assets/fotos/lifestyle2.jpg',
          'assets/fotos/lifestyle3.jpg',
          'assets/fotos/lifestyle4.jpg'
        ]
      },
      {
        titulo: 'Still Life',
        recursos: 50,
        destacada: false,
        imagenes: [
          'assets/fotos/still1.jpg',
          'assets/fotos/still2.jpg',
          'assets/fotos/still3.jpg',
          'assets/fotos/still4.jpg'
        ]
      },
      {
        titulo: 'Animals',
        recursos: 100,
        destacada: true,
        imagenes: [
          'assets/fotos/animals1.jpg',
          'assets/fotos/animals2.jpg',
          'assets/fotos/animals3.jpg',
          'assets/fotos/animals4.jpg'
        ]
      },
      {
        titulo: 'Fashion',
        recursos: 80,
        destacada: true,
        imagenes: [
          'assets/fotos/fashion1.jpg',
          'assets/fotos/fashion2.jpg',
          'assets/fotos/fashion3.jpg',
          'assets/fotos/fashion4.jpg'
        ]
      }
    ];
    
    faqs = [
      {
        question: '¿Cómo edito una foto?',
        answer: 'Si quieres editar las fotos que encuentres en Freepik, solo tienes que descargarlas y abrirlas con un programa de edición...',
        open: false
      },
      {
        question: '¿Cómo se elimina el fondo de una foto con el editor online de Freepik?',
        answer: 'Con nuestro editor de fotos online, puedes realizar una de las tareas de edición más demandadas: eliminar el fondo de una imagen...',
        open: false
      },
      {
        question: '¿Cómo puedo usar las fotos gratuitas?',
        answer: 'Freepik te permite utilizar las fotos que descargues de forma gratuita en proyectos personales y comerciales...',
        open: false
      },
      {
        question: '¿Puedo utilizar imágenes con copyright para uso comercial?',
        answer: 'Sí, puedes utilizar nuestras fotos para uso comercial siempre y cuando tu producto final siga nuestras normas de uso...',
        open: false
      }
    ];
  
    toggle(index: number): void {
      this.faqs[index].open = !this.faqs[index].open;
    }
}

  
