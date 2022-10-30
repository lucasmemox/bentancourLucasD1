import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoTexto'
})
export class BooleanoTextoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
