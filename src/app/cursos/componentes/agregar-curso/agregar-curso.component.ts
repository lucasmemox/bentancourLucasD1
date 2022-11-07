import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursoService } from '../../servicios/curso.service';
import { Curso } from '../../models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private CursoService: CursoService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre : new FormControl(),
      comision: new FormControl(),
      profesor: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      inscripcionAbierta: new FormControl()
    });
   }

   agregarCurso(){

    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: './assets/imagenes/angular-curso.png',
    };

    this.CursoService.agregarCurso(curso);
    this.router.navigate(['cursos'])
  }

  ngOnInit(): void {
  }

}
