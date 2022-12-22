import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {SesionService} from "../servicios/sesion.service";
import { Sesion } from 'src/app/identificarme/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesionService: SesionService,

    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesionService.obtenerDatosSesion().pipe(
      map((sesion: Sesion)=>{
        if(sesion.usuarioActivo?.admin){
          return true;
        } else{
          return false;
        }
      })
    )
  }

}
