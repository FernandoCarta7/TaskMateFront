import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Semestre } from '../../modelo/Semestre';
import { SemestreService } from '../../servicios/SemestreService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-semestres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-semestres.component.html',
  styleUrl: './listar-semestres.component.css',
})
export class ListarSemestresComponent {
  semestres: Semestre[];

  constructor(
    private semestreServicio: SemestreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerSemestres();
  }
  obtenerSemestres() {
    this.semestreServicio.getSemestres().subscribe((datos) => {
      this.semestres = datos;
    });
  }
  navegarRegistroSemestre(){
    this.router.navigate(['registrar-semestre']);
  }
}
