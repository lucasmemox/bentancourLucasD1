import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

}
