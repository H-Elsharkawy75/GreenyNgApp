
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-public-testimonial',
  templateUrl: './public-testimonial.component.html',
  styleUrls: ['./public-testimonial.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PublicTestimonialComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": false,
    "autoplay": true,
    "appendDots": true,
    "cssEase": 'ease',
    "arrows": true,
    "nextArrow": '<button type="button" class="Leftslick" ><i class="fas fa-chevron-left LeftIcon"></i></button>',
    "prevArrow": '<button type="button" class="Rightslick"><i class="fas fa-chevron-right"></i></button>',
  };



  constructor() { }

  ngOnInit(): void {
  }

}
