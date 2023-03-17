import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//data of response:
interface AuthResponseData{
    idToken: string; //Un jeton d'identification Firebase Auth pour l'utilisateur nouvellement créé.
    email: string;  //L'adresse e-mail de l'utilisateur nouvellement créé.
    refreshToken: string;  //Un jeton d'actualisation Firebase Auth pour l'utilisateur nouvellement créé.
    expireIn: string; //Le nombre de secondes pendant lesquelles le jeton d'ID expire.
    localId: string; //L'uid de l'utilisateur nouvellement créé.
}

@Injectable({providedIn: 'root'})
export class AuthService{
    isLoggedIn =false;

    constructor(private http: HttpClient){
    }
    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsR-nqUfokOrgzG7qZc7qqx49bcKiVmEc',
        {email, password, returnSecureToken: true});
        // console.log(authRes);
    }

    login(){
        this.isLoggedIn = true;
    }

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