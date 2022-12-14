import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
