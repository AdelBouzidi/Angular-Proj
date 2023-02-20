import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService],
})
export class UserComponent implements OnInit{
  @Input() user: { name: string; status: string; } | undefined;
  @Input() id:number | any;
  constructor(private userService: UserService) {    
  }

  ngOnInit(): void {
  }

  onUpdateStatus(status: string){
    this.userService.UpdateStatus(this.id, status);
  }

}