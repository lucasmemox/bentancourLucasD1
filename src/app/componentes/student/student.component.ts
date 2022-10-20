import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
// DESAFIO 2
  listaAlumnos: Array<Alumno> = [
    {id: 1, nombre: 'Dave',apellido: 'Mustaine', curso: 'Angular',  edad: 25, dni: 2233345},
    {id: 2, nombre: 'Dani',apellido: 'Filth', curso: 'Desarrollo Web', edad: 30 , dni: 2233345},
    {id: 3, nombre: 'Joey',apellido: 'Belladona', curso: 'JavaScript', edad: 35 , dni: 2233345},
    {id: 4, nombre: 'Max',apellido: 'Cavalera', curso: 'Angular', edad: 28, dni: 2233345},
    {id: 5, nombre: 'Matt',apellido: 'Barlow', curso: 'Desarrollo Web', edad: 34, dni: 2233345},
    {id: 6, nombre: 'Bob',apellido: 'Reid', curso: 'JavaScript',edad: 28, dni: 2233345},
    {id: 7, nombre: 'Mile',apellido: 'Petrozza', curso: 'Angular', edad: 34, dni: 2233345},
    {id: 8, nombre: 'Marcel',apellido: 'Schirmer', curso: 'Desarrollo Web', edad: 28, dni: 2233345}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
