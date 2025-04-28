import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ResourceCategory {
  icon: string;
  name: string;
  route: string;
}

interface Company {
  name: string;
  logoUrl: string;
  altText: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu!: ElementRef;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;

  isDropdownVisible = false;
  searchQuery = '';
  activeCategory = 'Todo';
  private globalClickListener: () => void;

  searchOptions = [
    { icon: '🖼️', title: 'Imagen' },
    { icon: '🎥', title: 'Video' },
    { icon: '🎨', title: 'Diseño' },
    { icon: '📝', title: 'Texto' },
    { icon: '🔊', title: 'Audio' },
    { icon: '📊', title: 'Presentación' }
  ];

  galleryItems = [
    { src: 'assets/images/ai-generator.jpg', title: 'Generador de imágenes con IA', description: 'Convierte las palabras en imágenes' },
    { src: 'assets/images/ai-videos.jpg', title: 'Generar vídeos IA', description: 'Crea vídeos impresionantes a partir de texto o de imágenes', badge: 'NUEVO' },
    { src: 'assets/images/variations.jpg', title: 'Generar variaciones', description: 'Crea distintas versiones de una misma imagen con IA' },
    { src: 'assets/images/improve-quality.jpg', title: 'Mejorar calidad', description: 'Aumenta la resolución y los detalles' },
    { src: 'assets/images/retouch.jpg', title: 'Retocar', description: 'Cambia detalles de forma sencilla' },
    { src: 'assets/images/remove-bg.jpg', title: 'Quitar fondos', description: 'Elimina cualquier imagen' },
    { src: 'assets/images/voz.jpg', title: 'Generador de voz con IA', description: 'Locuciones profesionales en cuestión de segundos' },
    { src: 'assets/images/personajes.jpg', title: 'Crear personajes', description: 'Crea un personaje y descubre sus posibilidades' }
  ];

  popularImages = [
    { src: 'assets/images/fitness.jpg', title: 'Vídeos De Fitness', alt: 'Vídeos De Fitness' },
    { src: 'assets/images/colorful.jpg', title: 'Fondos Coloridos', alt: 'Fondos Coloridos' },
    { src: 'assets/images/patrick.jpg', title: 'Imágenes Del Día De San Patricio', alt: 'Imágenes Del Día De San Patricio' },
    { src: 'assets/images/butterfly.jpg', title: 'Fondos De Mariposa', alt: 'Fondos De Mariposa' },
    { src: 'assets/images/clouds.jpg', title: 'Vídeos De Nubes', alt: 'Vídeos De Nubes' },
    { src: 'assets/images/festival.jpg', title: 'Fotos De Festivales', alt: 'Fotos De Festivales' },
    { src: 'assets/images/green.jpg', title: 'Fondos Verdes', alt: 'Fondos Verdes' },
    { src: 'assets/images/ramadan.jpg', title: 'Vídeos Del Ramadán', alt: 'Vídeos Del Ramadán' },
    { src: 'assets/images/magazine.jpg', title: 'Mockups De Revistas', alt: 'Mockups De Revistas' }
  ];

  inspireImages = [
    { src: 'assets/images/img1.jpg', alt: 'Descripción 1' },
    { src: 'assets/images/img2.jpg', alt: 'Descripción 2' },
    { src: 'assets/images/img3.jpg', alt: 'Descripción 3' },
    { src: 'assets/images/img4.jpg', alt: 'Descripción 4' },
    { src: 'assets/images/img5.jpg', alt: 'Descripción 5' },
    { src: 'assets/images/img6.jpg', alt: 'Descripción 6' },
    { src: 'assets/images/img7.jpg', alt: 'Descripción 7' },
    { src: 'assets/images/img8.jpg', alt: 'Descripción 8' },
    { src: 'assets/images/img9.jpg', alt: 'Descripción 9' },
    { src: 'assets/images/img10.jpg', alt: 'Descripción 10' }
  ];

  categories: ResourceCategory[] = [
    { icon: 'assets/icons/vector.png', name: 'Vectores', route: '/vectores' },
    { icon: 'assets/icons/fotos.png', name: 'Fotos', route: '/fotos' },
    { icon: 'assets/icons/ilustraciones.png', name: 'Ilustraciones', route: '/ilustraciones' },
    { icon: 'assets/icons/iconos.png', name: 'Iconos', route: '/iconos' },
    { icon: 'assets/icons/videos.png', name: 'Videos', route: '/videos' },
    { icon: 'assets/icons/plantillas.png', name: 'Plantillas', route: '/plantillas' },
    { icon: 'assets/icons/psd.png', name: 'PSD', route: '/psd' },
    { icon: 'assets/icons/mockup.png', name: 'Mockups', route: '/mockups' }
  ];

  companies: Company[] = [
    { name: 'Airbnb', logoUrl: 'assets/logos/airbnb.png', altText: 'Airbnb logo' },
    { name: 'Google', logoUrl: 'assets/logos/google.png', altText: 'Google logo' },
    { name: 'Coca Cola', logoUrl: 'assets/logos/cocacola.png', altText: 'Coca Cola logo' },
    { name: 'Snowflake', logoUrl: 'assets/logos/snowflake.png', altText: 'Snowflake logo' }
  ];

  constructor(private renderer: Renderer2, private router: Router) {
    this.globalClickListener = () => {};
  }

  ngOnInit() {
    // Cualquier lógica de inicialización adicional aquí si es necesario
  }

  ngAfterViewInit() {
    this.globalClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        this.dropdownMenu &&
        !this.dropdownMenu.nativeElement.contains(target) &&
        !this.searchInput.nativeElement.contains(target)
      ) {
        this.closeDropdown();
      }
    });
  }

  ngOnDestroy() {
    if (this.globalClickListener) {
      this.globalClickListener();
    }
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Buscando:', this.searchQuery);
    }
  }

  onCreateResource(option: any) {
    console.log('Crear recurso:', option.title);
  }

  scrollGallery(direction: 'left' | 'right') {
    if (this.galleryContainer) {
      const scrollAmount = 300;
      this.galleryContainer.nativeElement.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getFilteredGalleryItems() {
    if (this.activeCategory === 'Todo') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.title.includes(this.activeCategory));
  }

  navigateToCategory(category: ResourceCategory): void {
    console.log(`Navegando a ${category.name}`);
    this.router.navigate([category.route]);
  }
  
  irARegistro() {
    this.router.navigate(['/registro']);
  }
}