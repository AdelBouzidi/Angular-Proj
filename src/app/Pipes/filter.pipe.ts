import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false                     // pure: true represente pure pipe, et pure: false représente impure pipe. 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string){
    if(value.length === 0 || filterString === ''){// if there is  no data passed by the user // hadi value.length === 0  mafhamtch lah dernaha 
      return value;
    }
    const users =[];
    for(const user of value){
      if(user['name'] === filterString){
        users.push(user);
      }
    }
    return users;
  }

}
 