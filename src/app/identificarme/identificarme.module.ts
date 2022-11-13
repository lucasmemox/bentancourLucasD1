import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificarmeRoutingModule } from './identificarme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    IdentificarmeRoutingModule,
    SharedModule
  ]
})
export class IdentificarmeModule { }
