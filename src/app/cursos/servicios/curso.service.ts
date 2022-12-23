import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, concatMap, map, Observable, throwError } from 'rxjs';
import { Curso } from '../models/curso';
import { Datos } from '../datos/cursos';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  // private cursos: Curso[] = Datos.cursos;
  // private cursosSubject: BehaviorSubject<Curso[]>;

  // constructor() {
  //   this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  // }

  constructor(
    private http: HttpClient) {  }

  obtenerCursos(): Observable<Curso[]> {
    // return this.cursosSubject.asObservable();

    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerCurso(id: number): Observable<Curso>{
    // return this.obtenerCursos().pipe(
    //   map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id)[0])
    // )
    return this.http.get<Curso>(`${environment.api}/cursos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarCurso(curso: Curso){
    // this.cursos.push(curso);
    // this.cursosSubject.next(this.cursos);
    this.http.post(`${environment.api}/cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarCurso(curso: Curso){

    // this.cursosSubject.next(this.cursos);
    this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarCurso(id: number) {
    return this.http
      .delete<Curso>(`${environment.api}/cursos/${id}`)
      .pipe(concatMap(() => this.obtenerCursos()));
  }


  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del Cliente', error.error.message);
    }else{
      console.warn('Error del Servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicación HTTP'));
  }


}
