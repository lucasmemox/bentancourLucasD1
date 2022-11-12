import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { StudentComponent } from './componentes/student/student.component';

const rutas: Routes = [
      { path: 'alumnos', component: StudentComponent, children: [
          { path: 'agregaralu', component: FormularioAlumnoComponent }
 ]},
    // { path: 'alumnos', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
