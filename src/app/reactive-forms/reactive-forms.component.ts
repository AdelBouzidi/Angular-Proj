import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup | any;
  restictedNames = ['Leela','Adel'];



  constructor() {    
  }
  get HobbyControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  //without Grouping the Controls :
  // ngOnInit(): void {
  //   //we need to create an object of the form Group, and i need to give the controls present in the form Group (inpusts) :
  //   this.signUpForm = new FormGroup({
  //     'username': new FormControl(null, Validators.required), //username is a form control you need to remember this, null <=> default value.
  //     //Validators is a static method 
  //     'email': new FormControl(null, [Validators.required, Validators.email]), //form control 2
  //     'gender': new FormControl('female') //form control 3
  //   })
  // }//after defining the validators we need to define the error message:

  ////with Grouping the Controls :
  ngOnInit(): void {
    //we need to create an object of the form Group, and i need to give the controls present in the form Group (inpusts) :
    this.signUpForm = new FormGroup({
      //'formcontrolName': new FormControl(default value, [sync validators], [async validators]),

      // 'userData': new FormGroup({}), : is the first thing to do for Grouping the Controls in the Reactive Forms using FormGroupName in FormGroup
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestictedNames.bind(this)]), //username is a form control you need to remember this, null <=> default value.
        //Validators is a static method 
        'email': new FormControl(null, [Validators.required, Validators.email]), //form control 2
      }), 

      'gender': new FormControl('female'), //form control 3
      'hobbies': new FormArray([])//FormArray = list of form control
    });
    this.signUpForm.statusChanges.subscribe((value: any) => {
      console.log(value);
    });

    // this.signUpForm.setValue({
    //   userData:{
    //     username: 'Hai Leela',
    //     email:'test@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: []
    // });
    this.signUpForm.patchValue({
      userData:{
        username: 'Hai Leela',
      },
      gender: 'male',
      hobbies: []
    });

  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby(){
    //here wwe need to add dynamicly the form control 
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }


  //{[s: string]: boolean} : cette méthode return un objet de cette forme:{string : true or false} :
  
  isRestictedNames(control: FormControl){     
    // if(this.restictedNames.includes(control.value)){
    if(this.restictedNames.includes(control.value)){
      return {nameIsRestricted: true}; //nameIsRestricted is a key for this custom Validations 
    }
    return null;
  }

  isRestrictedEmails(control: FormControl): Promise<any> | Observable<any>{
    let promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve ({emailIsRestricted: true});
          console.log('isRestrictedEmails');
        }else{
          resolve(null);
        }
      }, 2000);
    })    
    return promise; 
  }







  


}
