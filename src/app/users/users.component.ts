import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../services/dummy.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  usersData= ['Rama', 'Krishna', 'Leela'];
 
  constructor(private router: Router,private userService: UserService, private DummyService: DummyService) {    
  }
  ngOnInit(): void {
    this.DummyService.printLog('Hellow From Users Component');
  }

  onCategoriesClick(){
    this.router.navigateByUrl('/categories');
    // ou bien :  this.router.navigate(['/categories',id, etc]); avec cette méthode on peut passer qlq autres choses!
  }
  onUserAddedClick(){
    this.userService.addUser();
  }
}
