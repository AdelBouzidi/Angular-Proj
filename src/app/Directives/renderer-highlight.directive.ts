import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{
@Input('appRendererHighlight') defaultColor:string = 'red';
@Input() hightlightColor:string = 'yellow';
// ou bien: @Input(appRendererHighlight) hightlightColor:string = 'yellow';

  @HostBinding('style.backgroundColor') color: string | undefined ;
  // Le décorateur @HostBinding() dans une directive permet d’effectuer un binding entre un membre 
  // de la directive et une propriété de l’objet du DOM (dans notre cas rah narebtou this.element.nativeElement as HTMLElement avec 
  // this directive) qui est l’hôte de la directive.
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.color = this.defaultColor; //9bal mandirou hakda kant tji f debut kml clr bayda
  }
  @HostListener('mouseenter') onmouseover(event: Event){
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //    'background-color',
    //    'red'
    //    ); 11===>15 au lieur d'utiliser render on va utiliser Hostbinding :
    this.color = this.hightlightColor;
    // console.log('mousenter clicked');

  }
  @HostListener('mouseleave') onmouseleave(event: Event){
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'yellow'
    //   ); 22===>26 au lieur d'utiliser render on va utiliser Hostbinding :
    this.color = this.defaultColor;
    // console.log('mouseleave clicked');
  }
  @HostListener('click') onclick(event: Event){
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'green' 
    //   ); 31===>35 au lieur d'utiliser render on va utiliser Hostbinding :
    this.color = 'pink';
    // console.log('mouseleave clicked');
  }

}
