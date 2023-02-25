import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeactivateGuardService, IDeactivateGuard } from '../services/guardes/deactivat-guard.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, IDeactivateGuard{
  user:{ id: string; name: string; } | any;
  editUserDetails:{ id: string; name: string; } | any;
  constructor(private route: ActivatedRoute) {    
  }
  ngOnInit(): void { 
    this.route.params.subscribe((data: Params) => { //derna hakda bech juste yetbadlou id w name f lien nrecupiriwhom hna
      this.user = {
        id: data['id'],
        name: data['name'],
      }
      this.editUserDetails = {...this.user}; 
    }); 
  }

  // Sauvegarder(){
    // this.router.navigate(['/users',this.Id, this.Name, this.useredit.edit],
    // {queryParamsHandling: 'preserve',
    // });
  // }
  canExit(){
    if(this.editUserDetails.id !== this.user.id || this.editUserDetails.name !== this.user.name){
      console.log(this.user);
      console.log(this.editUserDetails);
      if(confirm('All changes will be lost if you move to another page')){
        return true;
      }else{
        return false;
      }
    }
     return true;  
  }



  


}
