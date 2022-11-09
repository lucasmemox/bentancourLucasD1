import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './componentes/agregar-curso/agregar-curso.component';
import { CursosComponent } from './componentes/listar-cursos/cursos.component';

const rutas: Routes = [
    // { path: 'listar', component: CursosComponent},
    // { path: 'editar', component: EditarCursoComponent },
    // { path: 'agregar_curso', component: AgregarCursoComponent}

    { path: 'listar', component: CursosComponent, children: [
      // { path: 'listar', component: ListaCursosComponent },
      // { path: 'editar', component: EditarCursoComponent },
      { path: 'agregar', component: AgregarCursoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
