import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ConcatenarApeNomPipe } from './pipes/concatenar-ape-nom.pipe';
import { CabeceraTextoDirective } from './directivas/cabecera-texto.directive';
import { StudentComponent } from './componentes/student/student.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';


@NgModule({
  declarations: [
    ConcatenarApeNomPipe,
    CabeceraTextoDirective,
    StudentComponent
    // FormularioAlumnoComponent
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
