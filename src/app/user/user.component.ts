import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: { id: string; name: string; } | any; 
    
  constructor(private route: ActivatedRoute, private router : Router) {    
  }
  //ActivatedRoute : ActivatedRoute = la route actuelle
  // ma3naha kayn un lien li rah mowafi9 l une component f routing w rah nab3thou bih des 
  // parametre, dans notre cas rah nesta9blou hna deux parametres de type string

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
      //quand on utilise this activate route snapshat il ya un probleme
    }
    this.route.params.subscribe((data: Params) => { //derna hakda bech juste yetbadlou id w name f lien nrecupiriwhom hna
      this.user = {
        id: data['id'],
        name: data['name'],
      }
    });
  }

  getRamaDetails(){
    this.router.navigate(['/users', 2, 'Rama'], {queryParams : {page : 1, search : 'leela'}});
  }

 

}
