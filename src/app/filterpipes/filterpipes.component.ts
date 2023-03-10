import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipes',
  templateUrl: './filterpipes.component.html',
  styleUrls: ['./filterpipes.component.css']
})
export class FilterpipesComponent implements OnInit{
  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];   
  
  ngOnInit(): void {
  }
}
