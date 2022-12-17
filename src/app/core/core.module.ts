import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { EffectsModule } from '@ngrx/effects';
import { SesionEffects } from '../sesion.effects';



@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SesionEffects])
  ]
})
export class CoreModule { }
