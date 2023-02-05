import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  /**
   *
   */
  userName: string='';
  usersList:string [] = [];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onUserAdded(a: string){
    this.usersList.push(a);
  }


}
