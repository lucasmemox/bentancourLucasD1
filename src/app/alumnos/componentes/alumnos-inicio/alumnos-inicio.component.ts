import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-inicio',
  templateUrl: './alumnos-inicio.component.html',
  styleUrls: ['./alumnos-inicio.component.css']
})
export class AlumnosInicioComponent implements OnInit {

  mostrarAlumnos: boolean;

  constructor(private router: Router) {
    this.mostrarAlumnos = true;
    this.router.navigate(['inicioalu/alumnos']);
  }

  ngOnInit(): void {}

}
