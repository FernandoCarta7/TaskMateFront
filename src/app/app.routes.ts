import { Routes } from '@angular/router';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarActividadesComponent } from './ACTIVIDADES/listar-actividades/listar-actividades.component';
import { EditarActividadesComponent } from './ACTIVIDADES/editar-actividades/editar-actividades.component';
import { RegistrarActividadesComponent } from './ACTIVIDADES/registrar-actividades/registrar-actividades.component';
import { EditarMateriasComponent } from './MATERIAS/editar-materias/editar-materias.component';
import { ListarMateriasComponent } from './MATERIAS/listar-materias/listar-materias.component';
import { RegistrarMateriasComponent } from './MATERIAS/registrar-materias/registrar-materias.component';
import { ListarPendientesComponent } from './PENDIENTES/listar-pendientes/listar-pendientes.component';
import { EditarPendientesComponent } from './PENDIENTES/editar-pendientes/editar-pendientes.component';
import { RegistrarPendientesComponent } from './PENDIENTES/registrar-pendientes/registrar-pendientes.component';
import { ListarSemestresComponent } from './SEMESTRES/listar-semestres/listar-semestres.component';
import { RegistrarSemestresComponent } from './SEMESTRES/registrar-semestres/registrar-semestres.component';
import { EditarSemestresComponent } from './SEMESTRES/editar-semestres/editar-semestres.component';

export const routes: Routes = [
    { path: 'registro-usuario', component: RegistroUsuarioComponent, 'title' : 'Registro' },
    { path: 'funcionalidades', component: FuncionalidadesComponent, 'title' : 'Funcionalidades' },

    { path:'listar-actividades',component: ListarActividadesComponent, title: 'Actividades' },
    { path:'editar-actividades',component: EditarActividadesComponent, title: 'Editar actividad' },
    { path:'registrar-actividades',component: RegistrarActividadesComponent, title:  'Registrar actividad'},

    { path:'listar-materias',component: ListarMateriasComponent, title: 'Materias' },
    { path:'editar-materias',component: EditarMateriasComponent, title: 'Editar materias' },
    { path:'registrar-materias',component: RegistrarMateriasComponent, title:  'Registrar materias'},
    
    { path:'listar-pendientes',component: ListarPendientesComponent, title: 'Pendientes' },
    { path:'editar-pendientes',component: EditarPendientesComponent, title: 'Editar pendiente' },
    { path:'registrar-pendientes',component: RegistrarPendientesComponent, title:  'Registrar pendiente'},
    
    { path:'listar-semestres',component: ListarSemestresComponent, title: 'Semestre' },
    { path:'editar-semestres',component: EditarSemestresComponent, title: 'Editar semestre' },
    { path:'registrar-semestre',component: RegistrarSemestresComponent, title:  'Registrar semestre'},

    { path: 'inicio', component: InicioComponent, 'title' : 'Inicio' },
    { path: '', redirectTo: 'registro-usuario', pathMatch: 'full' }
];
