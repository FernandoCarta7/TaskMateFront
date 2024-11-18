import { Routes } from '@angular/router';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

export const routes: Routes = [
    { path: 'registro-usuario', component: RegistroUsuarioComponent, 'title' : 'Registro' },
    { path: 'funcionalidades', component: FuncionalidadesComponent, 'title' : 'Funcionalidades' },
    { path: '', redirectTo: 'registro-usuario', pathMatch: 'full' }
];
