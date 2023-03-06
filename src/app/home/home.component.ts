import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  intervalSubsciption: Subscription = new Subscription;
  routeSubscription: Subscription = new Subscription;
  constructor(private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe((data: Data) => {
      console.log(data);
    },(error: any) => {
      console.log(error); //Catch Errors 
    });
    // const interval$ = interval(1000);  //every one second this obsservables will send the data 1.2.3.....linfinis
    // interval$.subscribe(val => console.log("stream => " + val));  ou bien
    // this.intervalSubsciption = interval(1000).subscribe(count =>{
    //   console.log(count);
    // })

    // custom observable :
    let customObservable = Observable.create((observer:any) => {
      let count = 0;;
      setInterval(() => {
        observer.next(count); //it will send the data
        if(count > 3){
          observer.error('count is grater than three');
        }
        if(count > 2){
          return observer.complete(); //quand son travail est fait et terminé. par exemple une requete http réussite.
        }
        count++;
      },1000);
    });
    this.intervalSubsciption = customObservable.subscribe((data: any) =>{ 
    console.log(data); 
    },(error: any) => { 
      console.log(error); //Catch Errors  
    },() =>{ 
      console.log('complete'); //how can we can note that this observable is complete
    }) 
  } 

  

  ngOnDestroy(): void {
    this.intervalSubsciption.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
