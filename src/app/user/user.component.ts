import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {
@Input() userName:string='';
@Input() name:string='';  
  constructor(){
    console.log('constructor called');
  }
  ngOnChanges(element: SimpleChanges): void {
    console.log('ngOnChanges is called');
    //console.log('La valeur de (userName) a changé à',element['userName'].currentValue);
    //console.log('La valeur de (name) a changé à',element['name'].currentValue);
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  //ngOnChanges(changes: SimpleChanges) {
    //if (changes['userName']) {
    //  console.log('La valeur a changé de', changes['userName'].previousValue, 'à', changes['userName'].currentValue);
   // }
  // }

}
