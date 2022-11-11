import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './componentes/student/student.component';

const rutas: Routes = [
      { path: 'alumnos', component: StudentComponent, children: [
    //      { path: 'agregarcu', component: AgregarCursoComponent },

     ]},

    // { path: 'alumnos', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
