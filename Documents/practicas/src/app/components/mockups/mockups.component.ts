import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MockupCategory {
  title: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-mockups',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Add CommonModule and FormsModule here
  templateUrl: './mockups.component.html',
  styleUrls: ['./mockups.component.css']
})
export class MockupsComponent implements OnInit{
  popularSearches: string[] = ['sudadera', 'sitio web', 'caja'];
  isSearchMenuOpen: boolean = false;
  activeCategory: string = 'mockups';
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  toggleSearchMenu(event: Event): void {
    event.stopPropagation();
    this.isSearchMenuOpen = true;
  }
  
  @HostListener('document:click', ['$event'])
  closeSearchMenu(event: Event): void {
    const target = event.target as HTMLElement;
    
    // Si el clic no fue dentro del menú de búsqueda o la barra de búsqueda, cerrar el menú
    if (!target.closest('.search-dropdown') && !target.closest('.search-box')) {
      this.isSearchMenuOpen = false;
    }
  }
  
  selectCategory(category: string): void {
    this.activeCategory = category;
  }
  
  search(query: string): void {
    // Implementar la lógica de búsqueda
    console.log('Buscando:', query);
  }
  
  selectPopularSearch(term: string): void {
    // Implementar selección de búsqueda popular
    console.log('Término seleccionado:', term);
  }
  
  redirectToPremium(): void {
    // Redireccionar a la página de planes premium
    console.log('Redirigiendo a planes premium');
  }

  categories: MockupCategory[] = [
    {
      title: 'Mockups de ropa',
      image: 'assets/images/mockups/clothing.jpg',
      link: '/mockups/ropa'
    },
    {
      title: 'Mockups de dispositivos',
      image: 'assets/images/mockups/devices.jpg',
      link: '/mockups/dispositivos'
    },
    {
      title: 'Mockups de productos imprimibles',
      image: 'assets/images/mockups/printable.jpg',
      link: '/mockups/imprimibles'
    },
    {
      title: 'Mockups de packaging',
      image: 'assets/images/mockups/packaging.jpg',
      link: '/mockups/packaging'
    }
  ];
}