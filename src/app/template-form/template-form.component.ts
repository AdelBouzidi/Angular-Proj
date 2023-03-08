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
  submitted = false;
  user = {
    username: '',
    email: '',
    gender: '', 
    about: ''
  }

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
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.about = this.signUpForm.value.about;
    this.signUpForm.reset(); // ma3naha ki tdir submit yatba3thou les données w mayb9awch ybanou 
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
