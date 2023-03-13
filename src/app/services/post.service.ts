import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "../posts/Post.model";

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

        return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json?custom=hay', {
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
        });
    }

    ClearPosts(){
        return this.http.delete<{name:string}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .subscribe(
            response => {
            console.log(response);
          })
    }
}