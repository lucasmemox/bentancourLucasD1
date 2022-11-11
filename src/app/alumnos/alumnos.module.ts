import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ConcatenarApeNomPipe } from './pipes/concatenar-ape-nom.pipe';
import { CabeceraTextoDirective } from './directivas/cabecera-texto.directive';


@NgModule({
  declarations: [
    ConcatenarApeNomPipe,
    CabeceraTextoDirective
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  // providers:[
  //   CursoService
  // ]
})
export class AlumnosModule { }
