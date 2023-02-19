import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
  providers: [LoggingService], // la dépendance ne soit accessible que dans un seul component et dans ses components enfants.
})
export class UsersComponent implements OnInit{
  userName: string='';
  compteur: number=-1; 
  usersList:string [] = [];
  name:string='Leela Name';
  isAvailable:boolean = true;
  value = 20;

  constructor(private loggingService: LoggingService) {} // comme ca i told him i need a logging service in this component
  ngOnInit(): void {
  }
  onUserAdded(a: string){
    this.usersList.push(a);
    this.compteur++;
  }
  onNameChanged(){
    this.name='Hai Leela Name';
    // console.log('name changed :'+this.name) au lieu d'utiliser cette instruction on va utiliser le service logging
    //let loggingService = new LoggingService; 9bal mandirou type de l'injecteur lfou9a (providers) kona ndirou hakda <= mais avec providers ndirou hakda:
    this.loggingService.LogToConsole('user is changed '+ this.name);
  }
  OnDeleteComponent(){
    this.usersList = [];
  }

}
