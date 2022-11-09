import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../servicios/curso.service';
import { Curso } from '../../models/curso';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css'],
})

export class AgregarCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private CursoService: CursoService,
    public dialogRef: MatDialogRef<AgregarCursoComponent>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      comision: new FormControl('',[Validators.required]),
      profesor: new FormControl(),
      fechaInicio: new FormControl('',[Validators.required]),
      fechaFin: new FormControl('',[Validators.required]),
      inscripcionAbierta: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {}

  agregarCurso() {
    const curso: Curso = {
      id: Math.round(Math.random() * 1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: './assets/imagenes/angular-curso.png',
    };

    this.CursoService.agregarCurso(curso);
    this.dialogRef.close();
  }

  cancelar()
  {
    this.dialogRef.close()
  }


}
