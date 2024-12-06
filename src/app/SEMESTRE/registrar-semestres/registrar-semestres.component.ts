import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Semestre } from '../../modelo/Semestre';
import { SemestreService } from '../../servicios/SemestreService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registrar-semestres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-semestres.component.html',
  styleUrl: './registrar-semestres.component.css',
})
export class RegistrarSemestresComponent {
  semestre: Semestre;
  numeroSemestre: string;
  nombreSemestre: string;

  constructor(
    private semestreService: SemestreService,
    private enrutador: Router
  ) {}
  ngOnInit() {
    this.semestre = new Semestre();
  }

  guardarSemestreClick() {
    this.guardarSemestre();
  }

  guardarSemestre() {
    this.semestre.nombre = this.nombreSemestre + " - " + this.numeroSemestre;
    this.semestreService.agregarSemestre(this.semestre).subscribe({
      next: () => {
        this.enrutador.navigate(['listar-semestres']);
      },
    });
  }

  navigateListadoSemestre(){
    this.enrutador.navigate(['/listar-semestres'])
  }
}
