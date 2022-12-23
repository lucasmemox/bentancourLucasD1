import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './core/componentes/contacto/contacto.component';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienesSomosComponent } from './core/componentes/quienes-somos/quienes-somos.component';
import { IdentificarmeGuard } from './core/guards/identificarme.guard';
import { RegisterComponent } from './identificarme/componentes/register/register.component';
import { LoginComponent } from './identificarme/componentes/login/login.component';

const rutas: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [IdentificarmeGuard]
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [IdentificarmeGuard]
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent,
    canActivate: [IdentificarmeGuard]
  },
  {
    path: 'iniciocur',
    loadChildren: () =>
    import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [IdentificarmeGuard]
  },
  {
    path: 'inicioalu',
    loadChildren: () =>
      import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [IdentificarmeGuard]
  },
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('./identificarme/identificarme.module').then(
        (m) => m.IdentificarmeModule
      ),
  },
  { path: 'register', component: RegisterComponent},
  // { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
