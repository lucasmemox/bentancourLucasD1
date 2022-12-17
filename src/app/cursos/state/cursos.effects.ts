import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CursosActions from './cursos.actions';
import { CursoService } from '../servicios/curso.service';


@Injectable()
export class CursosEffects {
  loadCursos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursosActions.loadCursos),
      concatMap(() =>
        this.cursosService.obtenerCursos().pipe(
          map((cursos) => CursosActions.loadCursosSuccess({ cursos })),
          catchError((error) => of(CursosActions.loadCursosFailure({ error })))
        )
      )
    )
  );

  eliminarCursos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap((action) =>
        this.cursosService
          .eliminarCurso(action.curso.id)
          .pipe(map(() => CursosActions.loadCursos()))
      )
    )
  );

  constructor(private actions$: Actions, private cursosService: CursoService) {}
}
