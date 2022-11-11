import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/componentes/navbar/navbar.component';
import { ToolbarComponent } from './core/componentes/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';
// import { StudentComponent } from './componentes/student/student.component';
// import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from './material.module';
import { FooterComponent } from './core/componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    CursosModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
