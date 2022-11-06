import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './componentes/listar-cursos/cursos.component';
import { MaterialModule } from '../material.module';
import { BooleanoTextoPipe } from './pipes/booleano-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { ConcatenarApeNomPipe } from './pipes/concatenar-ape-nom.pipe';
import { EstiloBoleanoDirective } from './directivas/estilo-boleano.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoService } from './servicios/curso.service';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';


@NgModule({
  declarations: [
    CursosComponent,
    BooleanoTextoPipe,
    FiltroCursosPipe,
    ConcatenarApeNomPipe,
    EstiloBoleanoDirective,
    AgregarCursoComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
