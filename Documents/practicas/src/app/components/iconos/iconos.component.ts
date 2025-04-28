import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface IconoCategoria {
  titulo: string;
  descripcion: string;
  formatos: string[];
  ejemplos: string[];
}
interface FamiliaIconos {
  title: string;
  source: string;
  icons: string[];
}

interface Novedad {
  titulo: string;
  descripcion: string;
  imagen: string;
  boton: {
    texto: string;
    tipo: 'action' | 'info';
  };
  esBeta?: boolean;
}

interface IconoEjemplo {
  id: number;
  path: string;
}
export interface Icon {
  id: number;
  name: string;
  path: string;
  category?: string;
}

@Component({
  selector: 'app-iconos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.css'],
})
export class IconosComponent implements OnInit {
  searchQuery: string = '';
  isSearchExpanded: boolean = false;
  rotatingTitles: string[] = [
    'iconos animados',
    'iconos de interfaz',
    'stickers',
  ];
  currentTitleIndex: number = 0;
  currentTitle: string = '';

  popularSearches: string[] = ['whatsapp', 'instagram', 'calendario'];

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.rotateTitles();
  }

  rotateTitles(): void {
    this.currentTitle = this.rotatingTitles[this.currentTitleIndex];
    this.currentTitleIndex =
      (this.currentTitleIndex + 1) % this.rotatingTitles.length;
    setTimeout(() => this.rotateTitles(), 3000); // Cambiar título cada 3 segundos
  }

  toggleSearch(): void {
    this.isSearchExpanded = true;
  }

  // irARegistro() {
   // this.router.navigate(['/registro']);
 // }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    // Si el clic fue fuera del elemento de búsqueda, cerramos el panel expandido
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSearchExpanded = false;
    }
  }

  categorias: IconoCategoria[] = [
    {
      titulo: 'Iconos estáticos',
      descripcion: 'Los iconos indicados para diseños claros y sencillos.',
      formatos: ['SVG', 'PNG'],
      ejemplos: ['📁', '🔗', '📱'],
    },
    {
      titulo: 'Iconos de interfaz',
      descripcion:
        'Haz que tu web y tus apps destaquen gracias a unos estupendos iconos.',
      formatos: ['ANDROID', 'iOS', 'CSS', 'SVG', 'PNG'],
      ejemplos: ['📊', '🔍', '📝'],
    },
    {
      titulo: 'Iconos animados',
      descripcion: 'Tu trabajo cobrará vida con iconos dinámicos.',
      formatos: ['JSON', 'MP4', 'GIF', 'SVG', 'PNG'],
      ejemplos: ['🔄', '✨', '👥'],
    },
    {
      titulo: 'Stickers',
      descripcion:
        'Dales un toque divertido a tus diseños o a tus páginas web.',
      formatos: ['SVG', 'PNG'],
      ejemplos: ['🐱', '🌈', '🚀'],
    },
  ];

  familias: FamiliaIconos[] = [
    {
      title: 'Special Lineal',
      source: 'Freepik',
      icons: [
        'assets/icons/special-lineal/icon1.svg',
        'assets/icons/special-lineal/icon2.svg',
        'assets/icons/special-lineal/icon3.svg',
        'assets/icons/special-lineal/icon4.svg',
        'assets/icons/special-lineal/icon5.svg',
        'assets/icons/special-lineal/icon6.svg',
        'assets/icons/special-lineal/icon7.svg',
        'assets/icons/special-lineal/icon8.svg',
      ],
    },
    {
      title: 'Basic Rounded Lineal',
      source: 'Freepik',
      icons: [
        'assets/icons/basic-rounded/icon1.svg',
        'assets/icons/basic-rounded/icon2.svg',
        'assets/icons/basic-rounded/icon3.svg',
        'assets/icons/basic-rounded/icon4.svg',
        'assets/icons/basic-rounded/icon5.svg',
        'assets/icons/basic-rounded/icon6.svg',
        'assets/icons/basic-rounded/icon7.svg',
        'assets/icons/basic-rounded/icon8.svg',
      ],
    },
    {
      title: 'Special Lineal color',
      source: 'Freepik',
      icons: [
        'assets/icons/special-color/icon1.svg',
        'assets/icons/special-color/icon2.svg',
        'assets/icons/special-color/icon3.svg',
        'assets/icons/special-color/icon4.svg',
        'assets/icons/special-color/icon5.svg',
        'assets/icons/special-color/icon6.svg',
        'assets/icons/special-color/icon7.svg',
        'assets/icons/special-color/icon8.svg',
      ],
    },
    {
      title: 'Special Flat',
      source: 'Freepik',
      icons: [
        'assets/icons/special-flat/icon1.svg',
        'assets/icons/special-flat/icon2.svg',
        'assets/icons/special-flat/icon3.svg',
        'assets/icons/special-flat/icon4.svg',
        'assets/icons/special-flat/icon5.svg',
        'assets/icons/special-flat/icon6.svg',
        'assets/icons/special-flat/icon7.svg',
        'assets/icons/special-flat/icon8.svg',
      ],
    },
    {
      title: 'Basic Straight Lineal',
      source: 'Freepik',
      icons: [
        'assets/icons/basic-straight/icon1.svg',
        'assets/icons/basic-straight/icon2.svg',
        'assets/icons/basic-straight/icon3.svg',
        'assets/icons/basic-straight/icon4.svg',
        'assets/icons/basic-straight/icon5.svg',
        'assets/icons/basic-straight/icon6.svg',
        'assets/icons/basic-straight/icon7.svg',
        'assets/icons/basic-straight/icon8.svg',
      ],
    },
    {
      title: 'Basic Straight Flat',
      source: 'Freepik',
      icons: [
        'assets/icons/basic-flat/icon1.svg',
        'assets/icons/basic-flat/icon2.svg',
        'assets/icons/basic-flat/icon3.svg',
        'assets/icons/basic-flat/icon4.svg',
        'assets/icons/basic-flat/icon5.svg',
        'assets/icons/basic-flat/icon6.svg',
        'assets/icons/basic-flat/icon7.svg',
        'assets/icons/basic-flat/icon8.svg',
      ],
    },
  ];

  novedades: Novedad[] = [
    {
      titulo: 'Generador de iconos',
      descripcion:
        'Crea tus propios iconos al instante con nuestra nueva herramienta de IA.',
      imagen: 'assets/images/generator-preview.png',
      boton: {
        texto: 'Probar ahora',
        tipo: 'action',
      },
      esBeta: true,
    },
    {
      titulo: 'Edita stickers e iconos',
      descripcion:
        'Mezcla colores, prueba degradados y juega con las formas para que todo esté a tu gusto.',
      imagen: 'assets/images/editor-preview.png',
      boton: {
        texto: 'Más información',
        tipo: 'info',
      },
    },
  ];
  estilosIconos = [
    {
      nombre: 'Relleno negro',
      cantidad: '1,500,724 icons',
      descripcion:
        'Un estilo más clásico y formal para que diseñes tanto aplicaciones web o de escritorio como pantallas de aplicaciones móviles y mockups.',
      imagenes: [
        'assets/iconos/relleno1.png',
        'assets/iconos/relleno2.png',
        'assets/iconos/relleno3.png',
        'assets/iconos/relleno4.png',
        'assets/iconos/relleno5.png',
        'assets/iconos/relleno6.png',
        'assets/iconos/relleno7.png',
        'assets/iconos/relleno8.png',
        'assets/iconos/relleno9.png',
      ],
    },
    {
      nombre: 'Negro lineal',
      cantidad: '2,724,394 icons',
      descripcion:
        'Iconos con un diseño de líneas limpias y modernas para interfaces minimalistas.',
      imagenes: [
        'assets/iconos/lineal1.png',
        'assets/iconos/lineal2.png',
        'assets/iconos/lineal3.png',
        'assets/iconos/lineal4.png',
        'assets/iconos/lineal5.png',
        'assets/iconos/lineal6.png',
        'assets/iconos/lineal7.png',
        'assets/iconos/lineal8.png',
        'assets/iconos/lineal9.png',
      ],
    },
    {
      nombre: 'Plano',
      cantidad: '2,085,970 icons',
      descripcion:
        'Iconos coloridos con estilo plano para interfaces amigables.',
      imagenes: [
        'assets/iconos/plano1.png',
        'assets/iconos/plano2.png',
        'assets/iconos/plano3.png',
        'assets/iconos/plano4.png',
        'assets/iconos/plano5.png',
        'assets/iconos/plano6.png',
        'assets/iconos/plano7.png',
        'assets/iconos/plano8.png',
        'assets/iconos/plano9.png',
      ],
    },
    {
      nombre: 'Gradiente',
      cantidad: '1,074,702 icons',
      descripcion:
        'Iconos modernos con gradientes para un aspecto vibrante y actual.',
      imagenes: [
        'assets/iconos/gradiente1.png',
        'assets/iconos/gradiente2.png',
        'assets/iconos/gradiente3.png',
        'assets/iconos/gradiente4.png',
        'assets/iconos/gradiente5.png',
        'assets/iconos/gradiente6.png',
        'assets/iconos/gradiente7.png',
        'assets/iconos/gradiente8.png',
        'assets/iconos/gradiente9.png',
      ],
    },
    {
      nombre: 'Dibujado a mano',
      cantidad: '51,339 icons',
      descripcion:
        'Iconos con aspecto manual para proyectos creativos y originales.',
      imagenes: [
        'assets/iconos/dibujado1.png',
        'assets/iconos/dibujado2.png',
        'assets/iconos/dibujado3.png',
        'assets/iconos/dibujado4.png',
        'assets/iconos/dibujado5.png',
        'assets/iconos/dibujado6.png',
        'assets/iconos/dibujado7.png',
        'assets/iconos/dibujado8.png',
        'assets/iconos/dibujado9.png',
      ],
    },
    {
      nombre: 'Lineal en color',
      cantidad: '2,606,526 icons',
      descripcion:
        'Iconos de comida y elementos naturales con estilo lineal colorido.',
      imagenes: [
        'assets/iconos/linealcolor1.png',
        'assets/iconos/linealcolor2.png',
        'assets/iconos/linealcolor3.png',
        'assets/iconos/linealcolor4.png',
        'assets/iconos/linealcolor5.png',
        'assets/iconos/linealcolor6.png',
        'assets/iconos/linealcolor7.png',
        'assets/iconos/linealcolor8.png',
        'assets/iconos/linealcolor9.png',
      ],
    },
  ];

  iconosArtistas = [
    // Primera fila
    {
      imagen: 'assets/iconos/semaforo.svg',
      opciones: ['PNG', 'SVG', 'EPS']
    },
    {
      imagen: 'assets/iconos/ramen.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/flores.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/perfil.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/equipo.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/corazon-mano.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/carpeta.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/teclado.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/rey.svg',
      opciones: []
    },
    
    // Segunda fila
    {
      imagen: 'assets/iconos/clima.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/quimica.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/startup.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/casa.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/flecha.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/whatsapp.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/calendario.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/museo.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/premio.svg',
      opciones: []
    },
    
    // Tercera fila
    {
      imagen: 'assets/iconos/planeta.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/busqueda-persona.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/dinero.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/documentos-nube.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/bandera.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/graduacion.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/impresora.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/pesa.svg',
      opciones: []
    },
    {
      imagen: 'assets/iconos/musica.svg',
      opciones: []
    }
  ];

  beneficios = [
    {
      icono: 'assets/iconos/download-icon.svg',
      titulo: 'Más de 10 millones de iconos PNG y SVG',
      descripcion: 'Elige entre los formatos gratuitos con atribución o los',
      enlace: 'formatos Premium',
      enlaceUrl: '#premium',
    },
    {
      icono: 'assets/iconos/quality-icon.svg',
      titulo: 'Iconos de calidad cada día',
      descripcion:
        'Mantén tus diseños siempre a la última gracias a los miles de iconos que añadimos',
      enlace: 'a diario',
      enlaceUrl: '#diario',
    },
    {
      icono: 'assets/iconos/shield-icon.svg',
      titulo: 'Para uso personal y comercial',
      descripcion:
        'Diseña cualquier proyecto que tengas en mente. Solo asegúrate de cumplir las reglas de uso.',
      enlace: '',
      enlaceUrl: '',
    },
  ];

//  iconos = [
  //  'assets/iconos/registro/route66.png',
    //'assets/iconos/registro/car.png',
    //'assets/iconos/registro/burger.png',
    //'assets/iconos/registro/firefighter.png',
    //'assets/iconos/registro/swim.png',
    //'assets/iconos/registro/tractor.png',
    //'assets/iconos/registro/bowling.png',
    //'assets/iconos/registro/tools.png',
    //'assets/iconos/registro/crocodile.png',
    //'assets/iconos/registro/icecream.png',
    //'assets/iconos/registro/suitcase.png',
    //'assets/iconos/registro/trophy.png',
    //'assets/iconos/registro/weightlifting.png',
    //'assets/iconos/registro/avocado.png',
    //'assets/iconos/registro/bank.png',
    //'assets/iconos/registro/megaphone.png',
    //'assets/iconos/registro/astronaut.png',
    //'assets/iconos/registro/bird.png',
    //'assets/iconos/registro/washing-machine.png',
    //'assets/iconos/registro/camping.png',
    //'assets/iconos/registro/fire.png'
  //];
  faqs = [
    {
      question: '¿Cuáles son las reglas de uso?',
      answer: 'Puedes utilizar los iconos de Freepik para uso personal y comercial. Por ejemplo, ' +
        'úsalos para diseñar tu página web, materiales publicitarios o packaging. Nuestros ' +
        'iconos no deben de ser el elemento principal del diseño de productos comerciales o ' +
        'logos asociados a marcas registradas. Recuerda que el contenido de Freepik tiene copyright ' +
        'y, por lo tanto, no podrás usarlo en un diseño que vayas a registrar. Lee los Términos de uso de Freepik.',
open: false
    },
    {
      question: '¿Qué diferencia hay entre un elemento principal y uno secundario?',
      answer: 'Consideramos que un icono de Freepik es el elemento principal del diseño de un producto' +
              'físico o digital cuando se utiliza sin ningún tipo de modificación. Para que un icono sea' +
              'considerado elemento secundario, en el diseño deben aparecer otros elementos que no sean de' +
              'Freepik y que tengan más peso en la composición final.' +
              'Más información.',
      open: false
    },
    {
      question: '¿Puedo editar los iconos?',
      answer: 'Sí. Puedes editar y personalizar los iconos a tu gusto. Asegúrate de que cumples nuestras' +
              'normas de uso. Además, si eres usuario gratuito, recuerda que deberás mencionar la autoría' +
              'del contenido que descargues y utilices.',
      open: false
    },
    {
      question: '¿Qué ventajas tiene la suscripción Premium?',
      answer: 'Tendrás acceso tanto al contenido gratuito como al Premium: vectores, fotos, archivos PSD,' +
              'fuentes, vídeos gratuitos, iconos, etc. No tendrás que mencionar la autoría de lo que' +
              'descargues ni verás anuncios mientras navegues por la página web. Además, tendrás soporte' +
              'prioritario y la posibilidad de realizar hasta 100 descargas al día. Pásate a Premium.',
      open: false
    }
    
  ];

  toggle(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}



