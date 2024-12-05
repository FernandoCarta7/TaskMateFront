import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../modelo/Usuario";
import { error } from "console";

@Injectable({
    providedIn:'root'
})

export class UsuarioService{

    private urlBase = "http://localhost:8080/TaskMate";
    private urlBuscarUsuarioEmail = "http://localhost:8080/TaskMate/userByEmail";
    private urlAdd = "http://localhost:8080/TaskMate/user/add";

    constructor(private http: HttpClient){}

    getUsers(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.urlBase}/${"users"}`)
    }

    addUser( user : Usuario ) :Observable<Object>{
        return this.http.post(this.urlAdd, user, { observe: 'response' });
    }
    //userByEmail
    getUserByEmail ( email: String ) {
        return this.http.get<Usuario> (`${this.urlBuscarUsuarioEmail}/${email}`);
    }

}