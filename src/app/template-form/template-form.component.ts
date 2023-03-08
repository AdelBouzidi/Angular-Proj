import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{
  @ViewChild('f') signUpForm: NgForm | any;
  gender='male';
  about='';
  ngOnInit(): void {
  }
  constructor() {    
  }

  // checkData(){
  //   console.log(this.signUpForm);

  // }
  // onFormSubmit(f: NgForm){
  //   console.log(f.value.username)
  //   console.log(f.value.email);
  //   console.log(f.value.gender);
  // }  
  onFormSubmit(){
    console.log(this.signUpForm);
 
  } 
  // fillValues(){
  //   this.signUpForm.form.setValue({
  //     userData: {
  //       email: 'bouzidi.ci@gmail.com',
  //       username: 'Adel'
  //     },
  //      gender:'male',
  //      about:'About Us'
  //   });
  // }
  fillValues(){
    this.signUpForm.form.patchValue({
      userData: {
        email: 'bouzidi.ci@gmail.com',
        username: 'Adel'
      },
      //  gender:'male',
      //  about:'About Us'
    });
  }

  

}
