//shis module will e shared between all modules

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";  
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./Pipes/filter.pipe";
import { ShortenPipe } from "./Pipes/shorten.pipe";
@NgModule({
    declarations: [
        ShortenPipe,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ShortenPipe,
        FilterPipe,
        CommonModule,
        FormsModule,
    ]
})
export class SharedModule{

}