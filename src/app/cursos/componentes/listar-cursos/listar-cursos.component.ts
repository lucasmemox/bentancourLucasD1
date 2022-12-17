import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/models/curso';
import { map, Observable, Subscription } from 'rxjs';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCursoComponent } from '../agregar-curso/agregar-curso.component';
import { CursoState } from '../../models/curso.state';
import { loadCursos, eliminarCurso } from '../../state/cursos.actions';
import { selectCursos } from '../../state/cursos.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit , OnDestroy {

  cursos$!: Observable<Curso[]>

  deshabilitado: boolean = false;

  nameUsuario!: any;
  
  sesionSubcription!: Subscription;

  constructor(private dialog: MatDialog,
              private cursoService: CursoService,
              private router: Router,
              private store: Store<CursoState>
              ) { }
  ngOnDestroy(): void {
    this.sesionSubcription.unsubscribe();
  }

  ngOnInit(): void {
    // this.cursos$ = this.cursoService.obtenerCursos();

    this.cursos$ = this.store.select(selectCursos);

    this.store.dispatch(loadCursos());
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    /* columna en especifico , filterPredicate lleva dos parametros*/
    this.cursos$ = this.cursoService
      .obtenerCursos()
      .pipe(
        map((c) =>
          c.filter((curso) =>
            curso.nombre
              .toLocaleLowerCase()
              .includes(valorObtenido.toLocaleLowerCase())
          )
        )
      );
  }

  openDialog() {
    let dialog = this.dialog.open(AgregarCursoComponent, {
      width: '50%',
      height: '80%',
    });
  }

  // eliminarCurso(id: number){
  eliminarCurso(curso: Curso){
    // this.cursoService.eliminarCurso(id);
    this.store.dispatch(eliminarCurso({ curso }));

  }

  editarCurso(curso: Curso){
    this.router.navigate(['iniciocur/editarcu', curso]);
  }

}
