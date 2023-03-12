import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Post } from './Post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  postForm: FormGroup | any;
  posts:Post[];
  constructor( private http: HttpClient) {
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])
    });
    this.getPost();
  }

  getPost(){ //we are getting the data as an object //howa mchatlo bla maa daar hadi:<{[key:string]:Post}>, la ligne suivante
    this.http.get<{[key:string]:Post}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(
      map(response => {
      let posts: Post[] = [];
      for(let key in response){ // in, not of, because it is an object.
        // console.log({...response[key], key});
        posts.push({...response[key], key});
      }
      return posts;
    })).subscribe(response => {
    //  console.log(response);
     this.posts=response;
    });
  } 

  onCreatePost(){
    // console.log(this.postForm.value);
    const postData= this.postForm.value;
    this.http.post<{name:string}>('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe(
      response =>{
        console.log(response);
        this.getPost();
    });
  }
}
