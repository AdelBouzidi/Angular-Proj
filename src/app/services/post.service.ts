import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Post } from "../posts/Post.model";
import { AuthInterceptorService } from "./auth-interceptor-service";

//sinon tnahih mena w tdirou f provider f app-component.ts kifkif, dans les deux cas You can now inject UserService 
//anywhere in your application.
@Injectable({ 
    providedIn: 'root', 
})
export class PostService{

    constructor(private http: HttpClient) {
    }

    fetchPosts(){
      let searchParams= new HttpParams();
      searchParams= searchParams.append('custom','Hai');
      searchParams= searchParams.append('name','Leela');

        return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json?custom=Hai', {
          headers: new HttpHeaders({
            'custom-header':'Leela'      
          }),
          // params: new HttpParams().set('custum','hai') sinon:
          params: searchParams
        })
        .pipe(
          map(response => {
        //   console.log(response);
          let posts: Post[] = [];
          for(let key in response){ // in, not of, because it is an object.
            // console.log({...response[key], key});
            posts.push({...response[key], key});
            // console.log(posts);
          }
          return posts;
        }));
    }

    createPosts(postData: Post){
        return this.http.post<{name:string}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,{
          headers: new HttpHeaders({
            'custom-header': 'post Leela',
          }),
          observe: 'response',
        });
    }

    ClearPosts(){
        return this.http.delete<{name:string}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
          observe: 'events',
        }).pipe(tap(response => {
          // if(response.type === 0){
          //   console.log('request sent');
          // } ou bien :
          if(response.type === HttpEventType.Sent){ //remember that HttpEventType exist only in type script not in javaScript
            console.log('request sent');  // HttpEventType.Sent : La demande a été envoyée par fil.
          }
          // if(response.type === 4){ //if there no data to delete it
          //   console.log(response);
          // } ou bien :
          if(response.type === HttpEventType.Response){ //if there no data to delete it
            console.log(response); // HttpEventType.Response : La réponse complète, y compris le corps, a été reçue.
          }
        }))
        .subscribe(
            response => {
            // console.log(response);
          })
    }
}