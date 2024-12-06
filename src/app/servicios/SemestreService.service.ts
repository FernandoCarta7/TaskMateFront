import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Semestre } from "../modelo/Semestre";

@Injectable({
    providedIn: 'root'
})
export class SemestreService{
    private urlBase = "http://localhost:8080/TaskMate/semestre-id";
    private urlGetSemestre = "http://localhost:8080/TaskMate/semestre";
    private urlRegistrarSemestre = "http://localhost:8080/TaskMate/semestre/registrar";
    private urlSemestreDelete = "http://localhost:8080/TaskMate/semestre-delete";
    

    constructor(private http: HttpClient){}

    getSemestreById(id:number){
        return this.http.get<Semestre>(`${this.urlBase}/${id}`);
    }

    getSemestres( ): Observable<Semestre []>{
        return this.http.get<Semestre []>(this.urlGetSemestre);
    }

    agregarSemestre(semestre : Semestre):Observable<Object>  {
        return this.http.post(this.urlRegistrarSemestre, semestre);
    }

    deleteSemestre( id : number ) : Observable<Object> {
        return this.http.delete(`${this.urlSemestreDelete}/${id}`);
    }

}