import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs";

export class UserService{
    // userAddeEvent = new EventEmitter<boolean>;
    userAddeEvent = new Subject<boolean>;

    getUser(id :string){
        if(id ==='1'){
            return{
                id:'1',
                name:'Rama'
            }
        }else{
            if(id ==='2'){
                return{
                    id:'2',
                    name:'Lrishna'
                }
            }else{
                return{
                    id:'3',
                    name:'Leela'
                }
            }
        }
    }

    addUser(){
        // this.userAddeEvent.emit(true);
        this.userAddeEvent.next(true);
    }
}