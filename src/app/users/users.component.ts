import { Component, OnInit } from '@angular/core';

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
  constructor() {}
  ngOnInit(): void {
  }
  onUserAdded(a: string){
    this.usersList.push(a);
    this.compteur++;
  }
  onNameChanged(){
    this.name='Hai Leela Name';
  }

}
