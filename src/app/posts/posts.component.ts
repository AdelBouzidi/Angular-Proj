import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from './Post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  postForm: FormGroup | any;
  posts:Post[];
  constructor( private http: HttpClient, private postService: PostService) {
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])
    });
    this.getPost();
  }

  getPost(){ //we are getting the data as an object //howa mchatlo bla maa daar hadi:<{[key:string]:Post}>, la ligne suivante
    this.postService.fetchPosts().subscribe(response => { // kona 9adrin ndirou (response :Post[]) mais aslan f service rana nretournou variable de type post[] 
    //  console.log(response);
     this.posts=response;
    });
  } 

  onCreatePost(){
    // console.log(this.postForm.value);
    const postData = this.postForm.value; // ou bien:     const postData :Post = this.postForm.value;
    this.postService.createPosts(postData).subscribe(
      response =>{
        console.log(response);
        this.getPost();
    });
  }
}
