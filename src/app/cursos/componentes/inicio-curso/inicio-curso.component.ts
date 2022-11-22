import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-curso',
  templateUrl: './inicio-curso.component.html',
  styleUrls: ['./inicio-curso.component.css']
})
export class InicioCursoComponent implements OnInit {

  mostrarLista: boolean;

  constructor(private router: Router) {
    this.mostrarLista = false;
   }

  ngOnInit(): void {
  }

  listar(){
    this.mostrarLista = true;
    this.router.navigate(['iniciocur/listar']);

}
}
