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
  posts:any;
  constructor( private http: HttpClient) {
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])
    });
    this.getPost();
  }

  getPost(){ //we are getting the data as an object
    this.http.get('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(
      map((response :{[key:string]:Post}) => {
      let posts: Post[] = [];
      for(let key in response){ // in not of, because it is an object
        // console.log({...response[key], key});
        // console.dir(response);
        // posts.push({...response[key], key});
        // posts.push(response[key], key);
      }
      console.log(posts);

      return posts;
    })).subscribe(response => {
    //  console.log(response);
     this.posts=response;
    });
  }

  onCreatePost(){
    // console.log(this.postForm.value);
    const postData= this.postForm.value;
    this.http.post('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe(response =>{
      this.getPost();
    });
  }
}
