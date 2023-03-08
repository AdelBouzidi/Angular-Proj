import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup | any;


  constructor() {    
  }
  ngOnInit(): void {
    //we need to create an object of the form Group, and i need to give the controls present in the form Group (inpusts) :
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required), //username is a form control you need to remember this, null <=> default value.
      //Validators is a static method
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female')
    })
  }//after defining the validators we need to define the error message:

  onSubmit(){
    console.log(this.signUpForm);
  }


}