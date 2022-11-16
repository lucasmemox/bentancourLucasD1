import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { BooleanoTextoPipe } from './pipes/booleano-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { EstiloBoleanoDirective } from './directivas/estilo-boleano.directive';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarCursosComponent,
    BooleanoTextoPipe,
    FiltroCursosPipe,
    EstiloBoleanoDirective,
    AgregarCursoComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  // providers:[
  //   CursoService
  // ]
})
export class CursosModule { }
