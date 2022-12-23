import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { InicioCursoComponent } from './componentes/inicio-curso/inicio-curso.component';

const rutas: Routes = [
      { path: '', children: [
          // { path: '', component: InicioCursoComponent, children: [
          { path: 'listar', component: ListarCursosComponent },
         { path: 'agregarcu', component: AgregarCursoComponent },
         { path: 'editarcu', component: EditarCursoComponent }
        ]},
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
