import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',    
}) 
export class AuthComponent implements OnInit{
    isLoginMode=true;
    isLoading = false;
    error: string;
    ngOnInit(): void {
    }

    constructor(private authService: AuthService) {
    }
    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }


    onFormSubmit(authForm: NgForm){
        if(!authForm.valid){
            return;
        }
        this.isLoading = true;
        if(this.isLoginMode){
            //Perform Login Request Call
        }else{       // hna rah ndirou khdmtna psq rana ndirou f signup
            this.authService.signup(authForm.value.email, authForm.value.password).subscribe((response : any) => {
                console.log(response);
                this.isLoading = false;
            }, (errorMessage) => {
                this.isLoading = false;
                this.error=errorMessage;
            });
        } 
        // console.log(authForm.value);
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