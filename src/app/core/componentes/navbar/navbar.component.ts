import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/identificarme/models/sesion';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesion$!: Observable<Sesion>;

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  logout(){
    this.sesionService.logout();
    this.router.navigate(['autenticacion/login']);
   }
}
