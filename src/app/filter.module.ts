// import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FilterpipesComponent } from "./filterpipes/filterpipes.component";
import { DummyService } from "./services/dummy.service";
// import { FilterPipe } from "./Pipes/filter.pipe";
// import { ShortenPipe } from "./Pipes/shorten.pipe";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations:[
        FilterpipesComponent,
        // ShortenPipe,  ==>
        // FilterPipe,   ==> dernahom f shared module
    ],
    imports: [
        // CommonModule,
        // FormsModule,
        SharedModule,
        RouterModule.forChild([
            {path: 'filterpipes', component: FilterpipesComponent }, 
        ]),
    ],

})
export class FilterModule{

}