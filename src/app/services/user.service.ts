import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class UserService{

    constructor(private logService : LogService) {        
    }
    users = [
        {name: 'leela', status: 'active'},
        {name: 'leela2', status: 'active'},
        {name: 'leela3', status: 'active'}
    ]
    addUser(name:string, status:string){
        this.users.push({name,status});
        this.logService.logStatus(status);
    }
    UpdateStatus(id :number, status: string){
        this.users[id].status=status;
        this.logService.logStatus(status);
    }
}