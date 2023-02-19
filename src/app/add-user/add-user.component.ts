import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //userName: string='';
  usersList: string[] = [];
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput')
  userInput!: ElementRef;

  ngOnInit(): void {
  }

  constructor() {  
  }

  OnUserAdded(){
    //this.userAdded.emit(this.userName);
    // this.userAdded.emit(input.value);
    this.userAdded.emit(this.userInput.nativeElement.value);
    //log to database make a post call fro ex
    console.log('user is added : '+this.userInput.nativeElement.value);

  }

}