import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/listar-cursos/cursos.component';

const routes: Routes = [
  // { path: 'cursos', component: CursoInicioComponent, children: [
    { path: 'listar', component: CursosComponent},
    // { path: 'editar', component: EditarCursosComponent},
    // { path: 'agregar', component: AgregarCursosComponent}
//  ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
