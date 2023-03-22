import { Directive, OnInit, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appPlaceHolder]',
})
export class PlaceHolderDirective implements OnInit{
    constructor(public ViewContainerRef: ViewContainerRef) {
    }
    ngOnInit(): void {
    }



}