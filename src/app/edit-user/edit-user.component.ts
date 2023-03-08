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
  constructor(private route: ActivatedRoute, private router: Router) {    
  }
  // ngOnInit(): void { 
  //   this.route.data.subscribe((data: Params) => { //derna hakda bech juste yetbadlou id w name f lien nrecupiriwhom hna
  //     this.user = {
  //       id: data['id'],
  //       name: data['name'],
  //     }
  //     this.editUserDetails = {...this.user}; 
  //   }); 
  // }

  ngOnInit(): void { 
    this.route.data.subscribe(data => { 
      console.log(data);
      this.user = {
        id: data['user']['id'], // 'user' hia li rana hatinha f f routing resolver editcomponent (resolve: {user : userResolveService})
        name: data['user']['name'],
      } // : ç_à_dire le resolveur de données rah yab3ath lel edit user data de type : {id:string ,name: string}
      this.editUserDetails = {...this.user}; 
    }); 
  }

  // Sauvegarder(){
    // this.router.navigate(['/users',this.Id, this.Name, this.useredit.edit],
    // {queryParamsHandling: 'preserve',
    // });
  // }


  // save(){
  //   this.router.navigate(['/users',this.editUserDetails.id, this.editUserDetails.name, 'edit'],
  //   {queryParamsHandling: 'preserve',
  //   });;
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
