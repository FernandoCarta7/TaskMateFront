import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor( private router : Router ){}

  navegarInicio(){
    this.router.navigate(['/inicio'])
  }
  navegarSemestre(){
    this.router.navigate(['/listar-semestres'])
  }
  navegarMaterias(){
    this.router.navigate(['/listar-materias'])
  }
  navegarRegistroSemestre(){
    this.router.navigate(['/registrar-semestre'])
  }
  navegarRegistroMateria(){
    this.router.navigate(['/registrar-materias'])
  }
}
