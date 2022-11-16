import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './core/componentes/contacto/contacto.component';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienesSomosComponent } from './core/componentes/quienes-somos/quienes-somos.component';
import { IdentificarmeGuard } from './core/guards/identificarme.guard';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [IdentificarmeGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(rutas)],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
