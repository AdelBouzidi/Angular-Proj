import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input() userName:string='';
@Input() name:string='';  
  constructor(){
    console.log('constructor called');
  }
  
  ngOnChanges(element: SimpleChanges): void {
    console.log('ngOnChanges is called');
    //console.log('La valeur de (userName) a changé à',element['userName'].currentValue);
    //console.log('La valeur de (name) a changé à',element['name'].currentValue);
    console.log(element);
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentinit is called');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }
}
