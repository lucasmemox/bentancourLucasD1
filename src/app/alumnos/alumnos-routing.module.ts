import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { StudentComponent } from './componentes/student/student.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';

const rutas: Routes = [
      { path: '', component: StudentComponent, children: [
          { path: 'agregaralu', component: FormularioAlumnoComponent }
 ]},
     { path: 'editaralu', component: EditarAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
