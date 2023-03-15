import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',    
}) 
export class AuthComponent implements OnInit{
    isLoginMode=true;
    ngOnInit(): void {
    }

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onFormSubmit(authForm: NgForm){
        console.log(authForm.value);
    }
    getPasswordErrors(password : any){   // howa daar hna (password : FormControm)
        if(password.errors?.['required']){
            return 'Password Required';     
        }
        if(password.errors?.['minlength']){
            return 'Password should be of 6 characters length';
        }
        return '';
    }


}