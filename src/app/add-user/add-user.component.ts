import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [LoggingService], //on peut retirer cette ligne sans probleme parceque dernaha f users et l'injecteur de type 
  // providers ysmehlna bech nest3mlou le service indiqué dans tous les components fils 
})
export class AddUserComponent implements OnInit {
  //userName: string='';
  usersList: string[] = [];
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput')
  userInput!: ElementRef;

  ngOnInit(): void {
  }

  constructor(private loggingService: LoggingService) {  
  }

  OnUserAdded(){
    //this.userAdded.emit(this.userName);
    // this.userAdded.emit(input.value);
    this.userAdded.emit(this.userInput.nativeElement.value);
    //log to database make a post call fro ex
    // console.log('user is added : '+this.userInput.nativeElement.value);
    this.loggingService.LogToConsole('user is added : '+this.userInput.nativeElement.value);

  }

}