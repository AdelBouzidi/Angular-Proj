import { HttpClient } from "@angular/common/http";
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
        return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .pipe(
          map(response => {
          console.log(response);
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
        postData);
    }
}