import { Pipe, PipeTransform } from "@angular/core";

//we should give a name for this pipe in order to we an use it in a decorator Pipe.
@Pipe({
    name: 'Shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, Limit: number) {
        if(value.length > Limit){
            return value.substr(0, Limit)+'...';
        }
        return value;
        
    }    //La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.
}