import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'username': new FormControl(null), //username is a form control you need to remember this, null <=> default value.
      'email': new FormControl(null),
      'gender': new FormControl('female')
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }


}
