import { ToastrService } from 'ngx-toastr';
import { CategoryHomeService } from './../../../../Services/CategoryHome/category-home.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryHome } from 'src/app/Interfaces/CategoryHome.interface';
@Component({
  selector: 'app-categoryslider-home',
  templateUrl: './categoryslider-home.component.html',
  styleUrls: ['./categoryslider-home.component.css']
})
export class CategorysliderHomeComponent implements OnInit {

  category:Array<CategoryHome> = []

  customOptions: OwlOptions = {
    loop: true,
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
        items: 5
      }
    },
    nav: true
  }
  constructor(private CateHomSer:CategoryHomeService, private toastr:ToastrService) { }

GetCategoryHomeData(){
  this.CateHomSer.getCategoryApi().subscribe(
    (data) => {
      this.category = data
    },
    (error) => {
      this.toastr.error(error);
    }
  )
}

  ngOnInit(): void {
    this.GetCategoryHomeData()
  }

}
