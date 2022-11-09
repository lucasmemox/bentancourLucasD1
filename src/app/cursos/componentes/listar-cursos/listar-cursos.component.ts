import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/models/curso';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>
  dataSource!: MatTableDataSource<Curso>;

  constructor(private dialog: MatDialog,private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }
  filtrarCurso(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(cursos: Curso, filtro: String){
      return cursos.nombre.toLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  agregarCurso(curso: Curso){
    this.router.navigate(['listar/agregarcu', curso]);
  }

}
