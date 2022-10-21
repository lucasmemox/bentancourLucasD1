import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css'],
})
export class FormularioAlumnoComponent implements OnInit {
  formularioAlumno: FormGroup;
  cursos: string[] = ['Angular', 'Desarrollo Web', 'JavaScript'];

  constructor(
    public dialogRef: MatDialogRef<FormularioAlumnoComponent>,
    private fb: FormBuilder
  ) {
    this.formularioAlumno = fb.group({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      edad: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  cambiarCurso(e: any) {}

  ngOnInit(): void {}

  agregarAlumno() {
    this.dialogRef.close(this.formularioAlumno.value);
  }
}
