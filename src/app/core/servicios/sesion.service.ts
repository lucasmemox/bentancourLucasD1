import { Injectable } from '@angular/core';
import { Sesion } from '../../identificarme/models/sesion';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: string, clave: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        clave: clave,
        admin: admin
      }
    }

    this.sesionSubject.next(sesion);
  }

  logout(){
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
}
