import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  usersData= ['Rama', 'Krishna', 'Leela'];
  ngOnInit(): void {
  }
  constructor(private router: Router,private userService: UserService) {    
  }

  onCategoriesClick(){
    this.router.navigateByUrl('/categories');
    // ou bien :  this.router.navigate(['/categories',id, etc]); avec cette méthode on peut passer qlq autres choses!
  }
  onUserAddedClick(){
    this.userService.addUser();
  }
}
