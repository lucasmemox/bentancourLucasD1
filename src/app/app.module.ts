import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { StudentComponent } from './componentes/student/student.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BooleanoTextoPipe } from './pipes/booleano-texto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    FooterComponent,
    FormularioUsuarioComponent,
    FormularioAlumnoComponent,
    BooleanoTextoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
