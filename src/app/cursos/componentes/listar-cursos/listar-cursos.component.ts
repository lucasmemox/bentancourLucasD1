import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/models/curso';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCursoComponent } from '../agregar-curso/agregar-curso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>

  constructor(private dialog: MatDialog,private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  filtrarCurso(event: Event){ }

  openDialog() {
    let dialog = this.dialog.open(AgregarCursoComponent, {
      width: '50%',
      height: '80%',
    });
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['iniciocur/editarcu', curso]);
  }

}
