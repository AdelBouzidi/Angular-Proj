import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[AppHighlightText]',
})
export class HighlightTextDirective implements OnInit{
    constructor(private element: ElementRef) {
        
    }
    ngOnInit(){
        (this.element.nativeElement as HTMLElement).style.backgroundColor='red';
    }
}
 