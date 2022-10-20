import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  listaAlumnos: Array<Alumno> = [
    {id: 1, nombre: 'Lautaro',apellido: 'Martinez', curso: 'Angular',  edad: 25, dni: 2233345},
    {id: 2, nombre: 'Emiliano',apellido: 'Martinez', curso: 'Angular', edad: 30 , dni: 2233345},
    {id: 3, nombre: 'Lionel',apellido: 'Messi', curso: 'Angular', edad: 35 , dni: 2233345},
    {id: 4, nombre: 'Rodrigo',apellido: 'De Paul', curso: 'Angular', edad: 28, dni: 2233345},
    {id: 5, nombre: 'Angel',apellido: 'Di Maria', curso: 'Angular', edad: 34, dni: 2233345},
    {id: 6, nombre: 'Paulo',apellido: 'Dybala', curso: 'Angular',edad: 28, dni: 2233345},
    {id: 7, nombre: 'Alejandro',apellido: 'Gomez', curso: 'Angular', edad: 34, dni: 2233345},
    {id: 8, nombre: 'Joaquin',apellido: 'Correa', curso: 'Angular', edad: 28, dni: 2233345}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
