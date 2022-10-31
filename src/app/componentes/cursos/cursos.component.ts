import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }
  // filtrarCurso(event: Event){
  //   const filtro = (event.target as HTMLInputElement).value;
  //   this.dataSource.filterPredicate = function(curso: Curso, filtro: String){
  //     return curso.nombre.toLowerCase().includes(filtro.toLocaleLowerCase());
  //   };
  //   this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  // }

}
