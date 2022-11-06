import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/models/curso';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/cursos/servicios/curso.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>
  dataSource!: MatTableDataSource<Curso>;

  constructor(private cursoService: CursoService) { }

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

}
