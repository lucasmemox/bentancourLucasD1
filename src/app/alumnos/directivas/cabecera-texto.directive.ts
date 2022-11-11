import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCabeceraTexto]'
})
export class CabeceraTextoDirective implements OnInit{

  constructor(private elemento: ElementRef, private renderer: Renderer2) { }

  ngOnInit() : void{
    this.renderer.setStyle(this.elemento.nativeElement,'font-size','20px')
 }
 
}
