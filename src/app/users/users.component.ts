import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userName: string='';
  compteur: number=-1; 
  usersList:string [] = [];
  name:string='Leela Name';
  isAvailable:boolean = true;
  value = 20;

  constructor() {}
  ngOnInit(): void {
  }
  onUserAdded(a: string){
    this.usersList.push(a);
    this.compteur++;
  }
  onNameChanged(){
    this.name='Hai Leela Name';
    // console.log('name changed :'+this.name) au lieu d'utiliser cette instruction on va utiliser le service logging
    let loggingService = new LoggingService;
    loggingService.LogToConsole('user is changed '+ this.name);
  }
  OnDeleteComponent(){
    this.usersList = [];
  }

}
