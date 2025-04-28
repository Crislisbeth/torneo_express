import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para las categorías de imágenes
interface ImageCategory {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

// Interfaz para los vectores destacados
interface FeaturedVector {
  imageUrl: string;
  altText: string;
  title?: string;
}

// Nueva interfaz para los temas de vectores
interface VectorTheme {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

interface Coleccion {
  id: number;
  titulo: string;
  recursos: number;
  imagenes: string[];
}

interface Articulo {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
}

interface Tema {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
}

interface ColeccionPremium {
  id: number;
  nombre: string;
  tipo: string;
  imagenPrincipal: string;
  miniaturas: string[];
}

@Component({
  selector: 'app-vectores',
  templateUrl: './vectores.component.html',
  styleUrls: ['./vectores.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class VectoresComponent implements OnInit {
  categories: ImageCategory[] = [];
  featuredVectors: FeaturedVector[] = [];
  vectorThemes: VectorTheme[] = [];
  activeThemeCategory: string = 'Eventos';
  
  colecciones: Coleccion[] = [
    {
      id: 1,
      titulo: 'Degradados coloridos',
      recursos: 113,
      imagenes: [
        'assets/images/degradados/degradado1.jpg',
        'assets/images/degradados/degradado2.jpg',
        'assets/images/degradados/degradado3.jpg',
        'assets/images/degradados/degradado4.jpg'
      ]
    },
    {
      id: 2,
      titulo: 'Vistas vectoriales 3D',
      recursos: 100,
      imagenes: [
        'assets/images/3d/vista3d1.jpg',
        'assets/images/3d/vista3d2.jpg',
        'assets/images/3d/vista3d1.jpg',
        'assets/images/3d/vista3d2.jpg'
      ]
    },
    {
      id: 3,
      titulo: 'Ilustraciones a mano',
      recursos: 50,
      imagenes: [
        'assets/images/ilustraciones/ilustracion1.jpg',
        'assets/images/ilustraciones/ilustracion2.jpg',
        'assets/images/ilustraciones/ilustracion1.jpg',
        'assets/images/ilustraciones/ilustracion2.jpg'
      ]
    },
    {
      id: 4,
      titulo: 'Color del año 2024',
      recursos: 68,
      imagenes: [
        'assets/images/color2024/color1.jpg',
        'assets/images/color2024/color2.jpg',
        'assets/images/color2024/color3.jpg',
        'assets/images/color2024/color1.jpg'
      ]
    }
  ];

  articulos: Articulo[] = [
    {
      id: 1,
      titulo: '¿Qué es clip art?',
      descripcion: 'Tanto si te dedicas al diseño gráfico o al marketing como si eres sencillamente una persona entusiasta de la creatividad, es probable que te hayas topado alguna vez con el clip art a la hora de preparar presentaciones o de diseñar...',
      imagen: 'assets/images/articulos/clipart.jpg',
      url: '/articulos/que-es-clip-art'
    },
    {
      id: 2,
      titulo: 'Principios de diseño y cómo aplicarlos',
      descripcion: 'El diseño es un elemento esencial a la hora de concebir un proyecto atractivo desde el punto de vista visual. Independientemente de que te dediques al diseño gráfico o seas estudiante, creativo o especialista en marketing, tienes que comprender los principios de diseño...',
      imagen: 'assets/images/articulos/principios.jpg',
      url: '/articulos/principios-de-diseno'
    },
    {
      id: 3,
      titulo: 'Cómo crear un personaje vectorial desde el boceto',
      descripcion: 'Ahora podemos coger ideas oníricas, o incluso prehistóricas, y convertirlas en cualquier cosa que queramos. Y cuando nos referimos a cualquier cosa no estamos exagerando, porque precisamente esa es la belleza del diseño de personajes vectoriales...',
      imagen: 'assets/images/articulos/personaje.jpg',
      url: '/articulos/crear-personaje-vectorial'
    }
  ];

  temas: Tema[] = [
    { id: 1, nombre: 'Naturaleza', imagen: 'assets/images/temas/naturaleza.jpg', categoria: 'Naturaleza' },
    { id: 2, nombre: 'Tecnología', imagen: 'assets/images/temas/tecnologia.jpg', categoria: 'Tecnología' },
    { id: 3, nombre: 'Negocios', imagen: 'assets/images/temas/negocios.jpg', categoria: 'Negocios' },
    { id: 4, nombre: 'Abstracto', imagen: 'assets/images/temas/abstracto.jpg', categoria: 'Abstracto' },
    { id: 5, nombre: 'Personajes', imagen: 'assets/images/temas/personajes.jpg', categoria: 'Personajes' },
    { id: 6, nombre: 'Íconos', imagen: 'assets/images/temas/iconos.jpg', categoria: 'Íconos' },
    { id: 7, nombre: 'Patrones', imagen: 'assets/images/temas/patrones.jpg', categoria: 'Patrones' },
    { id: 8, nombre: 'Fondos', imagen: 'assets/images/temas/fondos.jpg', categoria: 'Fondos' }
  ];

  coleccionesPremium: ColeccionPremium[] = [
    {
      id: 1,
      nombre: 'Colección Premium 2024',
      tipo: 'Premium',
      imagenPrincipal: 'assets/images/premium/premium1.jpg',
      miniaturas: [
        'assets/images/premium/thumb1-1.jpg',
        'assets/images/premium/thumb1-2.jpg',
        'assets/images/premium/thumb1-3.jpg'
      ]
    },
    {
      id: 2,
      nombre: 'Diseños Futuristas',
      tipo: 'Exclusivo',
      imagenPrincipal: 'assets/images/premium/premium2.jpg',
      miniaturas: [
        'assets/images/premium/thumb2-1.jpg',
        'assets/images/premium/thumb2-2.jpg',
        'assets/images/premium/thumb2-3.jpg'
      ]
    },
    {
      id: 3,
      nombre: 'Arte Digital 3D',
      tipo: 'Nuevo',
      imagenPrincipal: 'assets/images/premium/premium3.jpg',
      miniaturas: [
        'assets/images/premium/thumb3-1.jpg',
        'assets/images/premium/thumb3-2.jpg',
        'assets/images/premium/thumb3-3.jpg'
      ]
    }
  ];

  ngOnInit(): void {
    // Inicializa las categorías con datos de ejemplo
    this.categories = [
      {
        id: 1,
        title: 'Ilustraciones',
        imageUrl: 'assets/images/ilustraciones.jpg',
        description: 'Ilustraciones artísticas para tus proyectos'
      },
      {
        id: 2,
        title: 'Fondos',
        imageUrl: 'assets/images/fondos.jpg',
        description: 'Fondos abstractos y coloridos'
      },
      {
        id: 3,
        title: 'Texturas',
        imageUrl: 'assets/images/texturas.jpg',
        description: 'Texturas elegantes para diseños sofisticados'
      },
      {
        id: 4,
        title: 'Clip Art',
        imageUrl: 'assets/images/clipart.jpg',
        description: 'Elementos gráficos para todo tipo de proyectos'
      },
      {
        id: 5,
        title: 'Dibujos',
        imageUrl: 'assets/images/dibujos.jpg',
        description: 'Dibujos artísticos y creativos'
      },
      {
        id: 6,
        title: 'Dibujos Animados',
        imageUrl: 'assets/images/dibujos-animados.jpg',
        description: 'Ilustraciones animadas y dinámicas'
      },
      {
        id: 7,
        title: 'Patrones',
        imageUrl: 'assets/images/patrones.jpg',
        description: 'Patrones decorativos y repetitivos'
      },
      {
        id: 8,
        title: 'Símbolos Y Signos',
        imageUrl: 'assets/images/simbolos.jpg',
        description: 'Símbolos e iconografía esencial'
      },
      {
        id: 9,
        title: 'Siluetas',
        imageUrl: 'assets/images/siluetas.jpg',
        description: 'Siluetas para diversos usos'
      }
    ];

    // Inicializa los vectores destacados
    this.featuredVectors = [
      { 
        imageUrl: 'assets/images/featured/ice-cream-pink.jpg', 
        altText: 'Ilustración de helados de fresa',
        title: 'Helados de verano'
      },
      { 
        imageUrl: 'assets/images/featured/rainbow.jpg', 
        altText: 'Arcoíris colorido con nubes',
        title: 'Arcoíris colorido'
      },
      { 
        imageUrl: 'assets/images/featured/purple-texture.jpg', 
        altText: 'Textura abstracta púrpura',
        title: 'Textura abstracta'
      },
      { 
        imageUrl: 'assets/images/featured/scrapbook-collage.jpg', 
        altText: 'Collage de scrapbook con elementos florales',
        title: 'Collage estilo scrapbook'
      },
      { 
        imageUrl: 'assets/images/featured/fantasy-girl.jpg', 
        altText: 'Ilustración de fantasía con chica de cabello azul',
        title: 'Ilustración de fantasía'
      },
      { 
        imageUrl: 'assets/images/featured/sunset-sky.jpg', 
        altText: 'Cielo al atardecer con luna',
        title: 'Atardecer con luna'
      },
      { 
        imageUrl: 'assets/images/featured/japanese-gate.jpg', 
        altText: 'Portón torii japonés en paisaje',
        title: 'Portón torii japonés'
      },
      { 
        imageUrl: 'assets/images/featured/popsicles.jpg', 
        altText: 'Patrón de paletas heladas sobre fondo morado',
        title: 'Patrón de paletas'
      },
      { 
        imageUrl: 'assets/images/featured/celestial-eyes.jpg', 
        altText: 'Ilustración mística con ojos y elementos celestiales',
        title: 'Arte celestial con ojos'
      }
    ];

    // Inicializa los temas de vectores
    this.vectorThemes = [
      {
        id: 1,
        title: 'Vectores De Navidad',
        imageUrl: 'assets/images/themes/navidad.jpg',
        category: 'Eventos'
      },
      {
        id: 2,
        title: 'Vectores De Halloween',
        imageUrl: 'assets/images/themes/halloween.jpg',
        category: 'Eventos'
      },
      {
        id: 3,
        title: 'Vectores De Semana Santa',
        imageUrl: 'assets/images/themes/semana-santa.jpg',
        category: 'Eventos'
      },
      {
        id: 4,
        title: 'Vectores De Otoño',
        imageUrl: 'assets/images/themes/otono.jpg',
        category: 'Eventos'
      },
      {
        id: 5,
        title: 'Vectores De Primavera',
        imageUrl: 'assets/images/themes/primavera.jpg',
        category: 'Eventos'
      },
      {
        id: 6,
        title: 'Vectores De Verano',
        imageUrl: 'assets/images/themes/verano.jpg',
        category: 'Eventos'
      },
      {
        id: 7,
        title: 'Vectores De Año Nuevo',
        imageUrl: 'assets/images/themes/ano-nuevo.jpg',
        category: 'Eventos'
      },
      {
        id: 8,
        title: 'Vectores De Invierno',
        imageUrl: 'assets/images/themes/invierno.jpg',
        category: 'Eventos'
      },
      {
        id: 9,
        title: 'Vectores Del Día De La Madre',
        imageUrl: 'assets/images/themes/dia-madre.jpg',
        category: 'Eventos'
      },
      {
        id: 10,
        title: 'Vectores De Carnaval',
        imageUrl: 'assets/images/themes/carnaval.jpg',
        category: 'Eventos'
      },
      {
        id: 11,
        title: 'Vectores Del Día Del Padre',
        imageUrl: 'assets/images/themes/dia-padre.jpg',
        category: 'Eventos'
      },
      {
        id: 12,
        title: 'Vectores De San Valentín',
        imageUrl: 'assets/images/themes/san-valentin.jpg',
        category: 'Eventos'
      },
      {
        id: 13,
        title: 'Vectores De Casas',
        imageUrl: 'assets/images/themes/casa.jpg',
        category: 'Objetos'
      },
      {
        id: 15,
        title: 'Vectores De Coches',
        imageUrl: 'assets/images/themes/coche.jpg',
        category: 'Objetos'
      },
      {
        id: 16,
        title: 'Vectores De Reloj',
        imageUrl: 'assets/images/themes/reloj.jpg',
        category: 'Objetos'
      },
      {
        id: 17,
        title: 'Vectores De Avion',
        imageUrl: 'assets/images/themes/avion.jpg',
        category: 'Objetos'
      },
      {
        id: 18,
        title: 'Vectores De Marco',
        imageUrl: 'assets/images/themes/marco.jpg',
        category: 'Objetos'
      },
      {
        id: 19,
        title: 'Vectores De Libro',
        imageUrl: 'assets/images/themes/libro.jpg',
        category: 'Objetos'
      },
      {
        id: 20,
        title: 'Vectores De Pizarra',
        imageUrl: 'assets/images/themes/pizarra.jpg',
        category: 'Objetos'
      },
      {
        id: 21,
        title: 'Vectores De Regalo',
        imageUrl: 'assets/images/themes/regalo.jpg',
        category: 'Objetos'
      },
      {
        id: 22,
        title: 'Vectores De Sombrero',
        imageUrl: 'assets/images/themes/sombrero.jpg',
        category: 'Objetos'
      },
      {
        id: 23,
        title: 'Vectores De Lapiz',
        imageUrl: 'assets/images/themes/lapiz.jpg',
        category: 'Objetos'
      },
      {
        id: 24,
        title: 'Vectores De Taza de cafe',
        imageUrl: 'assets/images/themes/taza-cafe.jpg',
        category: 'Objetos'
      },
      {
        id: 25,
        title: 'Vectores De Papel picado',
        imageUrl: 'assets/images/themes/papel-picado.jpg',
        category: 'Objetos'
      },
      {
        id: 26,
        title: 'Vectores De Estrella',
        imageUrl: 'assets/images/themes/estrella.jpg',
        category: 'Naturaleza'
      },
      {
        id: 27,
        title: 'Vectores De Corazon',
        imageUrl: 'assets/images/themes/corazon.jpg',
        category: 'Naturaleza'
      },
      {
        id: 28,
        title: 'Vectores De Flores',
        imageUrl: 'assets/images/themes/flor.jpg',
        category: 'Naturaleza'
      },
      {
        id: 29,
        title: 'Vectores De Arbol',
        imageUrl: 'assets/images/themes/arbol.jpg',
        category: 'Naturaleza'
      },
      {
        id: 30,
        title: 'Vectores De Mariposas',
        imageUrl: 'assets/images/themes/mariposa.jpg',
        category: 'Naturaleza'
      },
      {
        id: 31,
        title: 'Vectores De Rayo',
        imageUrl: 'assets/images/themes/rayo.jpg',
        category: 'Naturaleza'
      },
      {
        id: 32,
        title: 'Vectores De Sol',
        imageUrl: 'assets/images/themes/sol.jpg',
        category: 'Naturaleza'
      },
      {
        id: 33,
        title: 'Vectores De Hojas',
        imageUrl: 'assets/images/themes/hoja.jpg',
        category: 'Naturaleza'
      },
      {
        id: 34,
        title: 'Vectores De Lunas',
        imageUrl: 'assets/images/themes/luna.jpg',
        category: 'Naturaleza'
      },
      {
        id: 35,
        title: 'Vectores De Palmeras',
        imageUrl: 'assets/images/themes/palmera.jpg',
        category: 'Naturaleza'
      },
      {
        id: 36,
        title: 'Vectores De Nube',
        imageUrl: 'assets/images/themes/nube.jpg',
        category: 'Naturaleza'
      },
      {
        id: 37,
        title: 'Vectores De Montaña',
        imageUrl: 'assets/images/themes/montaña.jpg',
        category: 'Naturaleza'
      },
      {
        id: 38,
        title: 'Vectores De Flecha',
        imageUrl: 'assets/images/themes/flecha.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Telefono',
        imageUrl: 'assets/images/themes/telefono.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Calavera',
        imageUrl: 'assets/images/themes/calavera.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Corona',
        imageUrl: 'assets/images/themes/corona.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Mano',
        imageUrl: 'assets/images/themes/mano.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Ojo',
        imageUrl: 'assets/images/themes/ojo.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Persona',
        imageUrl: 'assets/images/themes/persona.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Circulo',
        imageUrl: 'assets/images/themes/circulo.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Niños',
        imageUrl: 'assets/images/themes/niño.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Familia',
        imageUrl: 'assets/images/themes/familia.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De abuelos',
        imageUrl: 'assets/images/themes/abuelo.jpg',
        category: 'Otros'
      },
      {
        id: 39,
        title: 'Vectores De Mariachi',
        imageUrl: 'assets/images/themes/mariachi.jpg',
        category: 'Otros'
      },
    ];
  }

  vectorCollections = [
    {
      mainImage: 'assets/coleccion1/main.jpg',
      thumbnails: [
        'assets/coleccion1/1.jpg',
        'assets/coleccion1/2.jpg',
        'assets/coleccion1/3.jpg',
      ]
    },
    {
      mainImage: 'assets/coleccion2/main.jpg',
      thumbnails: [
        'assets/coleccion2/1.jpg',
        'assets/coleccion2/2.jpg',
        'assets/coleccion2/3.jpg',
      ]
    },
    {
      mainImage: 'assets/coleccion3/main.jpg',
      thumbnails: [
        'assets/coleccion3/1.jpg',
        'assets/coleccion3/2.jpg',
        'assets/coleccion3/3.jpg',
      ]
    }
  ];
  
  explorarColecciones(): void {
    // Implementar navegación o acción para explorar colecciones
    console.log('Explorando colecciones');
    // Por ejemplo: this.router.navigate(['/explorar-colecciones']);
  }

  filtrarTemasPor(categoria: string): void {
    // Implementar filtrado de temas por categoría
    console.log('Filtrando por categoría:', categoria);
    // Implementación del filtrado
  }

  verColeccion(id: number): void {
    // Implementar navegación a una colección específica
    console.log('Viendo colección:', id);
    // Por ejemplo: this.router.navigate(['/coleccion', id]);
  }

  verArticulo(url: string): void {
    // Implementar navegación a un artículo específico
    console.log('Navegando a:', url);
    // Por ejemplo: this.router.navigate([url]);
  }

  mostrarOpciones(id: number): void {
    // Mostrar menú de opciones para una colección
    console.log('Mostrando opciones para colección:', id);
    // Implementar lógica para mostrar un menú de opciones
  }


  onCategoryClick(category: ImageCategory): void {
    console.log(`Categoría seleccionada: ${category.title}`);
  }
  
  navigateToVectorDetails(vector: FeaturedVector): void {
    console.log(`Navegando a detalles de: ${vector.title}`);
  }
  
  onThemeClick(theme: VectorTheme): void {
    console.log(`Tema seleccionado: ${theme.title}`);
  }
  
  setActiveThemeCategory(category: string): void {
    this.activeThemeCategory = category;
  }
  
  get filteredThemes(): VectorTheme[] {
    return this.vectorThemes.filter(theme => 
      this.activeThemeCategory === 'Todos' || theme.category === this.activeThemeCategory
    );
  }
  
  // Nueva función para navegar por nombre de tema
  goToTheme(nombre: string): void {
    console.log(`Navegando al tema: ${nombre}`);
  }
}