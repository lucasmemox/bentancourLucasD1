import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';

import { NavbarComponent } from './core/componentes/navbar/navbar.component';
import { ToolbarComponent } from './core/componentes/toolbar/toolbar.component';
import { StudentComponent } from './componentes/student/student.component';
import { FooterComponent } from './core/componentes/footer/footer.component';
import { CursosComponent } from './cursos/componentes/listar-cursos/cursos.component';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { ContactoComponent } from './core/componentes/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './core/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './core/componentes/inicio/inicio.component';
import { CoreModule } from './core/core.module';
import { QuienesSomosComponent } from './core/componentes/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    FooterComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CursosModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
