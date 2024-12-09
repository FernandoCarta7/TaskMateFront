import { Routes } from '@angular/router';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarActividadesComponent } from './ACTIVIDADES/listar-actividades/listar-actividades.component';
import { EditarActividadesComponent } from './ACTIVIDADES/editar-actividades/editar-actividades.component';
import { RegistrarActividadesComponent } from './ACTIVIDADES/registrar-actividades/registrar-actividades.component';
import { ListarSemestresComponent } from './SEMESTRE/listar-semestres/listar-semestres.component';
import { RegistrarSemestresComponent } from './SEMESTRE/registrar-semestres/registrar-semestres.component';
import { EditarSemestresComponent } from './SEMESTRE/editar-semestres/editar-semestres.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListarMateriasComponent } from './MATERIAS/listar-materias/listar-materias.component';
import { EditarMateriasComponent } from './MATERIAS/editar-materias/editar-materias.component';
import { RegistrarMateriasComponent } from './MATERIAS/registrar-materias/registrar-materias.component';

export const routes: Routes = [
    { path: 'registro-usuario',     component: RegistroUsuarioComponent,        'title' : 'Registro' },
    { path: 'funcionalidades',      component: FuncionalidadesComponent,        'title' : 'Funcionalidades' },
    
    //RUTAS ASOCIADAS A ACTIVIDADES
    { path:'listar-actividades',    component: ListarActividadesComponent,      'title': 'Actividades' },
    { path:'editar-actividades',    component: EditarActividadesComponent,      'title': 'Editar actividad' },
    { path:'registrar-actividades', component: RegistrarActividadesComponent,   'title':  'Registrar actividad'},

    //RUTAS ASOCIADAS A MATERIAS
    { path:'listar-materias',       component: ListarMateriasComponent,         'title': 'Materias' },
    { path:'editar-materias',       component: EditarMateriasComponent,         'title': 'Editar materias' },
    { path:'registrar-materias',    component: RegistrarMateriasComponent,      'title':  'Registrar materias'},
    
    //RUTAS ASOCIADAS A PENDIENTES
    
    
    //RUTAS ASOCIADAS A SEMESTRE
    { path:'listar-semestres',      component: ListarSemestresComponent,        'title': 'Semestre' },
    { path:'editar-semestres',      component: EditarSemestresComponent,        'title': 'Editar semestre' },
    { path:'registrar-semestre',    component: RegistrarSemestresComponent,     'title':  'Registrar semestre'},

    { path:'inicio-sesion',         component: InicioSesionComponent,           'title':  'Iniciar sesión'},    
    { path: 'inicio',               component: InicioComponent,                 'title' : 'Inicio' },
    { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' }
];
