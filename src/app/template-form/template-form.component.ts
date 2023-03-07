import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{
  @ViewChild('f') signUpForm: NgForm | any;

  ngOnInit(): void {
  }
  constructor() {    
  }

  checkData(){
    console.log(this.signUpForm);
  }
  // onFormSubmit(f: NgForm){
  //   console.log(f.value.username);
  //   console.log(f.value.email);
  //   console.log(f.value.gender);
  // }  
  onFormSubmit(){
    console.log(this.signUpForm.value.username);
    console.log(this.signUpForm.value.email);
    console.log(this.signUpForm.value.gender);
  } 


}
