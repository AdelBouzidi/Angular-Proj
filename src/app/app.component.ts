import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/guardes/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularrouting';

  constructor(private authService: AuthService) {    
  }
  ngOnInit(): void {
  }
  onLoginClick(){
    this.authService.login();
  }
  onLogoutClick(){
    this.authService.logout();
  }
}
