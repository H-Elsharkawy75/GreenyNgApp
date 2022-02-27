import { LoadingService } from './Services/loading/loading.service';
import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreenyStore';
  showloding: boolean = true;
  constructor(private router:Router, private LoadingSer: LoadingService){
    this.router.events.subscribe((routerEveent: Event) => {
      if( routerEveent instanceof NavigationStart){
        this.LoadingSer.show();
      }
      if(routerEveent instanceof NavigationEnd){

        this.LoadingSer.hide()
      }
    })
  }
}
