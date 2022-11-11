import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';

const rutas: Routes = [
      { path: 'listar', component: ListarCursosComponent, children: [
         { path: 'agregarcu', component: AgregarCursoComponent },
         { path: 'editar', component: EditarCursoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
