import { ToastrService } from 'ngx-toastr';
import { BrandsPublicService } from './../../../../Services/Brands_Public/brands-public.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/Interfaces/Brands/Brands.interface';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  Brands: Array<Brands> = [];
  constructor(private BrandSer:BrandsPublicService, private Toaster:ToastrService) { }
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
  ngOnInit(): void {
    this.GetBrands()
  }

  GetBrands(){
    this.BrandSer.getBrandsApi().subscribe(
      (res) => {
        this.Brands = res;
      },
      (error) => {
        this.Toaster.error(error);
      }
    )
  }

}
