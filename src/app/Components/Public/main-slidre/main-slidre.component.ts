import { ApiService } from './../../../Services/api.service';
import { SlidesService } from './../../../Services/slides.service';
import { Component, OnInit } from '@angular/core';
import { Slides } from 'src/app/Interfaces/Slide.Interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-slidre',
  templateUrl: './main-slidre.component.html',
  styleUrls: ['./main-slidre.component.css']
})
export class MainSlidreComponent implements OnInit {


  slides: Array<Slides>= []
  constructor(private SlideServ:SlidesService, private ApiServ:ApiService, private toastr:ToastrService) {
    this.GetSLideItem()
   }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": true,
    "autoplay": true,
    "appendDots": true,
    "cssEase": 'ease',
    "arrows": true,
    "nextArrow": '<button type="button" class="Leftslick" ><i class="fas fa-chevron-left LeftIcon"></i></button>',
    "prevArrow": '<button type="button" class="Rightslick"><i class="fas fa-chevron-right"></i></button>',
  };

  ngOnInit(): void {

  }


  GetSLideItem(){
    this.SlideServ.getApiSlides().subscribe(
      (SlideData) => {
      this.slides = SlideData
    },
    ServiceError => {
      this.toastr.error(ServiceError);
    }
    )
  }

}
