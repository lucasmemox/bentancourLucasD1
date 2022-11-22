import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { StudentComponent } from './componentes/student/student.component';
import { EditarAlumnoComponent } from './componentes/editar-alumno/editar-alumno.component';
import { AlumnosInicioComponent } from './componentes/alumnos-inicio/alumnos-inicio.component';

const rutas: Routes = [
      { path: '', component: AlumnosInicioComponent, children: [
          { path: 'alumnos', component: StudentComponent},
          { path: 'agregaralu', component: FormularioAlumnoComponent },
          { path: 'editaralu', component: EditarAlumnoComponent }
 ]},
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
