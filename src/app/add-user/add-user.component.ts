import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //userName: string='';
  usersList: string[] = [];
  @Output() userAdded = new EventEmitter<string>();

  ngOnInit(): void {
  }

  constructor() {  
  }

  OnUserAdded(input: HTMLInputElement){
    //this.userAdded.emit(this.userName);
    this.userAdded.emit(input.value);
  }

}