import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Alumno } from 'src/app/models/alumno';
import { Datos } from '../../datos/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  alumnos!: Alumno[]
  // alumnos: Alumno[] = Datos.alumnos;
  columnas: string[] = ['nombre', 'apellido','curso', 'edad', 'dni', 'acciones'];
  // dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion: any;

  constructor(private dialog: MatDialog, private alumnoService :  AlumnoService) { }

// DESAFIO 2
  // listaAlumnos: Array<Alumno> = [
  //   {id: 1, nombre: 'Dave',apellido: 'Mustaine', curso: 'Angular',  edad: 25, dni: 2233345},
  //   {id: 2, nombre: 'Dani',apellido: 'Filth', curso: 'Desarrollo Web', edad: 30 , dni: 2233345},
  //   {id: 3, nombre: 'Joey',apellido: 'Belladona', curso: 'JavaScript', edad: 35 , dni: 2233345},
  //   {id: 4, nombre: 'Max',apellido: 'Cavalera', curso: 'Angular', edad: 28, dni: 2233345},
  //   {id: 5, nombre: 'Matt',apellido: 'Barlow', curso: 'Desarrollo Web', edad: 34, dni: 2233345},
  //   {id: 6, nombre: 'Bob',apellido: 'Reid', curso: 'JavaScript',edad: 28, dni: 2233345},
  //   {id: 7, nombre: 'Mile',apellido: 'Petrozza', curso: 'Angular', edad: 34, dni: 2233345},
  //   {id: 8, nombre: 'Marcel',apellido: 'Schirmer', curso: 'Desarrollo Web', edad: 28, dni: 2233345}
  // ];

  ngOnInit(): void {
    this.suscripcion = this.alumnoService.obtenerAlumnos().subscribe(datos =>{
      this.alumnos = datos;
      this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
     })
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  borrar(id : number)
  {
    let position = this.alumnos.findIndex(alumno => alumno.id == id)
    this.alumnos.splice(position, 1)
    this.dataSource.data = this.alumnos;
  }

  filtrarApellido(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(alumnos: Alumno, filtro: String){
      return alumnos.apellido.toLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  openDialog() {
    let dialog = this.dialog.open(FormularioAlumnoComponent, {
      width: '50%',
      height: '80%',

    });


    dialog.beforeClosed().subscribe(res => {
      //console.log(res);
      if(res != null || res != undefined)
      {
        this.alumnos.push(
          {
            ...res,
            id:this.alumnos.length+1
          }
        );
        this.dataSource.data = this.alumnos;
      }
    });
  }
}
