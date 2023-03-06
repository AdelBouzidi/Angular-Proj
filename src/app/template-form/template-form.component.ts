import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor() {    
  }

  onFormSubmit(f: NgForm){
    console.log(f.value.username);
    console.log(f.value.email);
    console.log(f.value.gender);
  }

}
