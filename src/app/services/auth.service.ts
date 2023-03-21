import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User} from "../auth/user.model";

//data of response:
export interface AuthResponseData{
    idToken: string; //Un jeton d'identification Firebase Auth pour l'utilisateur nouvellement créé.
    email: string;  //L'adresse e-mail de l'utilisateur nouvellement créé.
    refreshToken: string;  //Un jeton d'actualisation Firebase Auth pour l'utilisateur nouvellement créé.
    expiresIn: string; // Le nombre de secondes pendant lesquelles le jeton d'ID expire.
    localId: string; //L'uid de l'utilisateur nouvellement créé.
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    isLoggedIn =false;
    // userSub = new Subject<User>();
    userSub = new BehaviorSubject<User|null>(null);
    clearTimeout: any;

    constructor(private http: HttpClient,private router: Router){
    }
    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsR-nqUfokOrgzG7qZc7qqx49bcKiVmEc',
        {email, password, returnSecureToken: true}).pipe(catchError((errorRes)=>{
            return this.getErrorHandler(errorRes);
        }), tap(
            // const expireDate = new Date( new Date().getTime()+ +Response.expireIn*1000);
            // //after succefuly response we will get the data here:
            // const user= new User(Response.email, Response.localId, Response.idToken, expireDate);
            this.HandleUser.bind(this) //sinon yla derna tap(Response=>.... : this.HandleUser(Response)
        ));
        // console.log(authRes);
    }


    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsR-nqUfokOrgzG7qZc7qqx49bcKiVmEc',
        {email, password, returnSecureToken: true}).pipe(catchError((errorRes)=>{
            return this.getErrorHandler(errorRes);
        }), tap(this.HandleUser.bind(this)));
    }

    private HandleUser(response: AuthResponseData){ // au lieu ndirou code hada dakhdel tap te3 login w te3 signup dernah hna f une fonction séparée pour eviter la duplication du code 
        const expireDate = new Date( new Date().getTime()+ +response.expiresIn * 1000);  // mahabtch tmchili !!!!!!!!!!!!
        // console.log('expireIn********************'+response.expireIn); // hadi raha tmdli undefined  !!!!!!!!!!!!!!!!!
        //after succefuly response we will get the data here:
        const user= new User(response.email, response.localId, response.idToken, expireDate);
        this.userSub.next(user);
        localStorage.setItem('userData',JSON.stringify(user)); // JSON.stringify it will convert the object "user" into string.
        this.autoLogout(+response.expiresIn*1000); //logout apres une heure
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


    autoLogout(expirationDate: number){
        console.log(expirationDate); //millee seconds
        this.clearTimeout = setTimeout(() => {
            this.logout();
        }, expirationDate);
    }

    logout(){
        this.isLoggedIn=false;
        this.userSub.next(null);  
        this.router.navigate(['/auth']);
        // localStorage.clear(); // delete all item of localStorage.
        localStorage.removeItem('userData'); // remove just the Item 'userData'.
        if(this.clearTimeout ){ // bech ki lutilisateur ydir login nhabsou setTimeout ta3 autologout.
            this.clearTimeout();
        }
    } 

    autoLogin(){ // it will retrive (récupérer) the data from the local storage and it will convert in into a user object and it will give it
        let userData :{email: string, _token: string, expirationDate: string, localId: string}= 
        JSON.parse(localStorage.getItem('userData')!);
        // JSON.parse: for convert it into an object:
        if(!userData){
            return;
        } 
        let user= new User(userData.email, userData.localId,  userData._token, new Date(userData.expirationDate) );
        //vérifier si le tokn n'est pas expiré:
        if(user.token){
            this.userSub.next(user); 
        }
        let date = new Date().getTime();
        let expirationDate = new Date(userData.expirationDate).getTime();
        this.autoLogout(expirationDate - date);
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime    Date/getTime
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