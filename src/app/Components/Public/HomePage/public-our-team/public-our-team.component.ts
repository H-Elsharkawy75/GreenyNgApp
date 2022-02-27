import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-our-team',
  templateUrl: './public-our-team.component.html',
  styleUrls: ['./public-our-team.component.css']
})
export class PublicOurTeamComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
    items: 5,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
