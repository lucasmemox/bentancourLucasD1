import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../alumnos/models/alumno';

@Pipe({
  name: 'concatenarApeNom'
})
export class ConcatenarApeNomPipe implements PipeTransform {

  transform(value: Alumno, ...args: string[]): string {
    return value.nombre + '  ' + value.apellido;
  }

}
