import { Routes } from '@angular/router';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'registro-usuario', component: RegistroUsuarioComponent, 'title' : 'Registro' },
    { path: 'funcionalidades', component: FuncionalidadesComponent, 'title' : 'Funcionalidades' },
    { path: 'inicio', component: InicioComponent, 'title' : 'Inicio' },
    { path: '', redirectTo: 'registro-usuario', pathMatch: 'full' }
];
