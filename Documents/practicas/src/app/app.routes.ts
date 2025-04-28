import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MediaLibraryComponent } from './components/media-library/media-library.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VectoresComponent } from './components/vectores/vectores.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { IlustracionesComponent } from './components/ilustraciones/ilustraciones.component';
import { IconosComponent } from './components/iconos/iconos.component';
import { VideosComponent } from './components/videos/videos.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { MockupsComponent } from './components/mockups/mockups.component';
import { TerminosCreadorComponent } from './components/terminos-creador/terminos-creador.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'vectores', component: VectoresComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'ilustraciones', component: IlustracionesComponent },
    { path: 'iconos', component: IconosComponent }, 
    { path: 'videos', component: VideosComponent },
    { path: 'plantillas', component: PlantillasComponent },
    { path: 'mockups', component: MockupsComponent },

    { path: 'terminos-creador', component: TerminosCreadorComponent },

    { path: '', component: MediaLibraryComponent },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }