import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

//data of response:
export interface AuthResponseData{
    idToken: string; //Un jeton d'identification Firebase Auth pour l'utilisateur nouvellement créé.
    email: string;  //L'adresse e-mail de l'utilisateur nouvellement créé.
    refreshToken: string;  //Un jeton d'actualisation Firebase Auth pour l'utilisateur nouvellement créé.
    expireIn: string; //Le nombre de secondes pendant lesquelles le jeton d'ID expire.
    localId: string; //L'uid de l'utilisateur nouvellement créé.
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    isLoggedIn =false;

    constructor(private http: HttpClient){
    }
    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsR-nqUfokOrgzG7qZc7qqx49bcKiVmEc',
        {email, password, returnSecureToken: true}).pipe(catchError((errorRes)=>{
            return this.getErrorHandler(errorRes);
        }));
        // console.log(authRes);
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsR-nqUfokOrgzG7qZc7qqx49bcKiVmEc',
        {email, password, returnSecureToken: true}).pipe(catchError((errorRes)=>{
            return this.getErrorHandler(errorRes);
        }));
    }

    //bech mandirouch catch error f sign up w f login fi zou2 ndirou une methode khir pour eviter la duplication 
    getErrorHandler(errorRes: HttpErrorResponse){
        console.log(errorRes);
        let errorMessage= 'An Error Ocured';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
            errorMessage='Email Already Exist';
            break;
            case 'EMAIL_NOT_FOUND':
                errorMessage='Email Not Found';
                break;
                case 'INVALID_PASSWORD':
                    errorMessage='Invalid Password, Re-enter your password Please';
                    break;
        } 
       
        return throwError(errorMessage);
    }


    // login(){
    //     this.isLoggedIn = true;
    // }

    logout(){
        this.isLoggedIn = false;
    }
    // isAuthenticated(){
    //     return this.isLoggedIn;
    // } hadi naha w daar f plasetha :
    isAuthenticated(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 2000);
        });
    }

}








// export class AuthService{
//     isLoggedIn =false;

//     login(){
//         this.isLoggedIn = true;
//     }

//     logout(){
//         this.isLoggedIn = false;
//     }
//     // isAuthenticated(){
//     //     return this.isLoggedIn;
//     // } hadi naha w daar f plasetha :
//     isAuthenticated(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(this.isLoggedIn);
//             }, 2000);
//         });
//     }

// }