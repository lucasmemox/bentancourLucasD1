import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appEstiloBoleano]'
})

export class EstiloBoleanoDirective implements OnInit{

  @Input('appEstiloBoleano') inscripcionAbierta!: boolean;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2

  ) { }

  ngOnInit(): void{
    this.renderer.setStyle(this.elemento.nativeElement, 'padding','0px 10px 0px 10px');
    this.renderer.setStyle(this.elemento.nativeElement, 'border-radius','40px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color','#FFFFFF');
    this.renderer.setStyle(this.elemento.nativeElement,
                           'background-color',
                           this.inscripcionAbierta ? '#52BE80':'#922B21 ');
  }

}
