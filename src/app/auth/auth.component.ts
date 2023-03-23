import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthResponseData, AuthService } from "../services/auth.service";
import { AlertModalComponent } from "../Shared/alert-modal/alert-modal.component";
import { PlaceholderDirective } from "../Shared/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',    
}) 
export class AuthComponent implements OnInit{
    isLoginMode=true;
    isLoading = false;
    error: any;
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
    closeSub : Subscription;
    ngOnInit(): void {
    }

    constructor(private authService: AuthService, private router: Router, private ComponentFactoryResolver: ComponentFactoryResolver) {
    }
    
    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }


    onFormSubmit(authForm: NgForm){
        if(!authForm.valid){
            return;
        }
        this.isLoading = true;
        // this.error=null ; mahabtch tmchili 

        let authObs: Observable<AuthResponseData>;
        if(this.isLoginMode){
            //Perform Login Request Call
            authObs = this.authService.login(authForm.value.email, authForm.value.password);
        }else{       // hna rah ndirou khdmtna psq rana ndirou f signup
            authObs = this.authService.signup(authForm.value.email, authForm.value.password);
        } 

        // pour eviter la duplication nahina .subscribe men login w signup we dernahom f une methode
        authObs.subscribe((response : any) => {
            // console.log(response);
            this.isLoading = false;
            // console.log('connexion effectuée');
            this.router.navigate(['/']);   // : navigate to the HomePage
        }, (errorMessage) => {
            this.isLoading = false;
            this.error=errorMessage;
            this.showErrorAlert(errorMessage);
        });
        // console.log(authForm.value);
    }

    showErrorAlert(message: string | null){
        // const alertModal = new AlertModalComponent(); // chaque component hia classe donc n9drou ncriyou mnha (instance de classe)
        const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(AlertModalComponent);
        this.alertHost.ViewContainerRef.clear(); //derna .clear bech yla kechma kaan kayn fel viewcontainer ref yetsupprima (like this view container ref will be empty)
        // this.alertHost.ViewContainerRef.createComponent(componentFactory);
        const componentRef = this.alertHost.ViewContainerRef.createComponent(componentFactory);
        componentRef.instance.error= message;
        // componentRef.instance.close; hakda matemchich parceque close howa observable (@Output() close = new EventEmitter<void>();)
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            this.alertHost.ViewContainerRef.clear();
        });
    }

    // ngOnDestroy(): void {
    //     this.closeSub.unsubscribe();
    // }



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