import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Datos } from '../datos/cursos';

@Injectable()

export class CursoService {
  private cursos: Curso[] = Datos.cursos;
  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() {
   this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => this.cursos.filter((Curso: Curso) => Curso.id === id))
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso){

  }

  eliminarCurso(id: number){

  }
}
