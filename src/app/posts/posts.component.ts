import { HttpClient, HttpContext } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

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

  getPost(){
    this.http.get('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json').pipe(map((response :any) => {
      let posts=[];
      for(let key in response){ // in not of because it is an object
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
    this.http.post('https://ng-complete-guide-f9175-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe(response =>{
      this.getPost();
    });
  }

}