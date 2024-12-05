export class Usuario {

  id: number;
  nombre: string;
  email: string;
  password: string;
  perfil: string;
  genero: string;
  fecha_nacimiento: Date;

  constructor(
    nombre: string,
    email: string,
    password: string,
    perfil: string,
    genero: string,
    fecha_nacimiento: Date
  ) {    
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.perfil = perfil;
    this.genero = genero;
    this.fecha_nacimiento = fecha_nacimiento;
  }  

  
}
