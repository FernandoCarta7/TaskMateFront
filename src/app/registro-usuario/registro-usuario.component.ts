import { Component } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../servicios/UsuarioService.service';
import { FormsModule } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'registro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css',
})
export class RegistroUsuarioComponent {
  //to do: Encriptar password

  usuario: Usuario;
  usuarioBuscar: Usuario;

  id: number;
  nombre_primero: string;
  nombre_segundo: string;
  apellido_primero: string;
  apellido_segundo: string;
  password_validacion: string;
  private nombre: string;
  bandera: boolean;
  existEmail: boolean;
  mensajeError: string;

  constructor(
    private usarioService: UsuarioService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.id = null;
    this.nombre_primero = null;
    this.nombre_segundo = null;
    this.apellido_primero = null;
    this.apellido_segundo = null;
    this.usuario = new Usuario(null, null, null, null, null, null);
    this.bandera = false;
    this.existEmail = false;
  }

  guardarUsuarioClick() {
    if (this.validateExistEmail() == null) {
      this.guardarUsuario();
    }
  }
  guardarUsuario() {
    this.nombre = this.nombre_primero + ' ' + this.nombre_segundo + ' ';
    this.apellido_primero + ' ' + this.apellido_segundo;

    if (this.usuario.password === this.password_validacion) {
      this.bandera = true;
    }

    if (
      this.validateEmail(this.usuario.email) &&
      this.validateName(this.nombre)
    ) {
      this.usuario = new Usuario(
        this.nombre,
        this.usuario.email,
        this.usuario.password,
        this.usuario.perfil,
        this.usuario.genero,
        this.usuario.fecha_nacimiento
      );

      this.usarioService.addUser(this.usuario).subscribe({
        next: (response) => {         
          
          this.enrutador.navigate(['inicio'])
        },
        error: (err) => {
          if (err.status === 409) {
            this.mensajeError =
              'El correo ya está en uso. Por favor, utiliza otro.';
          }else {
            //this.mensajeError = 'Hubo un error al registrar el usuario.';
            this.enrutador.navigate(['inicio']);
          }
        },
      });
    }
  }

  validateExistEmail() {
    this.usarioService.getUserByEmail(this.usuario.email).subscribe({
      next: (userFind) => {
        return userFind;
      },
      error: (error: any) => {
        return null;
      },
    });
  }

  validateEmail(correo: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(correo);
  }
  validateName(name: string): boolean {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    return nameRegex.test(name.trim());
  }

  irInicioSesion(){
    this.enrutador.navigate(['/inicio-sesion']);
  }
}
