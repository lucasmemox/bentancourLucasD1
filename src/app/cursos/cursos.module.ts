import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { BooleanoTextoPipe } from './pipes/booleano-texto.pipe';
import { FiltroCursosPipe } from './pipes/filtro-cursos.pipe';
import { EstiloBoleanoDirective } from './directivas/estilo-boleano.directive';
import { ListarCursosComponent as ListerCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { SharedModule } from '../shared/shared.module';
import { InicioCursoComponent } from './componentes/inicio-curso/inicio-curso.component';
import { CursoService } from './servicios/curso.service';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';


@NgModule({
  declarations: [
    ListerCursosComponent,
    BooleanoTextoPipe,
    FiltroCursosPipe,
    EstiloBoleanoDirective,
    AgregarCursoComponent,
    EditarCursoComponent,
    InicioCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursosFeatureKey,reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
