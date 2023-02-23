import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  useredit: { id: string; name: string; } | any;

  constructor(private route: ActivatedRoute, router: Router) {    
  }

  ngOnInit(): void {
    this.useredit = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
      //quand on utilise this activate route snapshat il ya un probleme
    }
    this.route.params.subscribe((data: Params) => { //derna hakda bech juste yetbadlou id w name f lien nrecupiriwhom hna
      this.useredit = {
        id: data['id'],
        name: data['name'],
      }
    });
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment); 30/31 ou bian 33/38;
  }


}
