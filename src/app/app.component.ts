import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FuncionalidadesComponent } from "./funcionalidades/funcionalidades.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FuncionalidadesComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskMate';
}
