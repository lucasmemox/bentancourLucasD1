import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/identificarme/models/sesion';
import { SesionService } from '../servicios/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class IdentificarmeGuard implements CanActivate {

  constructor(private sesion: SesionService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerDatosSesion().pipe(
        map((sesion: Sesion) =>{
          if(sesion.sesionActiva){
            return true;
          }else{
            // this.router.navigate(['autenticacion/login']);
             this.router.navigate(['register']);
            return false;
          }
        })
      )
  }

}
