import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  usuario: Usuario;
  correo: string;
  password: string;

  constructor(private router : Router){}


  login(){
    this.iniciarSesion();
  }
ngOnInit(){
  this.usuario = new Usuario("","","","","",null);
}

  iniciarSesion(){

  }
  irRegistroUsuario(){
    this.router.navigate(['registro-usuario']);
  }

}
