import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno'
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/alumnos/servicios/alumno.service';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  alumnos!: Alumno[]
  // alumnos: Alumno[] = Datos.alumnos;
  // columnas: string[] = ['nombre', 'apellido','curso', 'edad', 'dni', 'acciones'];
  columnas: string[] = ['nombre', 'curso', 'edad', 'dni', 'acciones'];
  // dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  dataSource!: MatTableDataSource<Alumno>;
  suscripcion: any;

  constructor(private dialog: MatDialog, private alumnoService :  AlumnoService, private router: Router) { }

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

  editar(alumno: Alumno){
    this.router.navigate(['editaralu', alumno]);
  }

}
function editar(alumno: any, Alumno: any) {
  throw new Error('Function not implemented.');
}

