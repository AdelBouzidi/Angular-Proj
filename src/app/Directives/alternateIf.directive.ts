import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
    selector : '[appAlternateIf]',
})
export class alternateIfDirective implements OnChanges{
    // @Input() appAlternateIf: boolean | undefined;
    // ngOnChanges(): void {
    //     if (this.appAlternateIf) {
    //         this.vcRef.createEmbeddedView(this.templateRef);
    //     }else{
    //         this.vcRef.clear();
    //     }
    // }   OU BIEN: 15======>22
    @Input() set appAlternateIf(condition: boolean){
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }else{
            this.vcRef.clear();
        }
    }
    ngOnChanges(): void {}

    constructor(
        private templateRef: TemplateRef<any>,//<div *appAlternateIf="isAvailable">this condition enables with cutome directive</div> 
        // donc templateRef représenté par: "this condition enables with cutome directive" et ViewContainerRef représente toute la page users.html
        private vcRef: ViewContainerRef
    ) {

    }
    
} 