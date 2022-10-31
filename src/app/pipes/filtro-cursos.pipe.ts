import { Pipe, PipeTransform } from '@angular/core';
import {Curso} from '../models/curso'

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(cursos: Curso[], filtro: string): Curso[] {
    return cursos.filter(curso => curso.nombre.includes(filtro.toLocaleLowerCase()) ||
    curso.comision.includes(filtro));
  }

}
