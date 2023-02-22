import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  ngOnInit(): void {
  }
  id=10;
  constructor(private router: Router) {    
  }

  onCategoriesClick(){
    this.router.navigateByUrl('/categories');
    // ou bien :  this.router.navigate(['/categories',id, etc]); avec cette méthode on peut passer qlq autres choses!
  }
}
