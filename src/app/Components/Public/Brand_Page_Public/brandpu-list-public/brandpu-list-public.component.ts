import { ToastrService } from 'ngx-toastr';
import { BrandsPublicService } from './../../../../Services/Brands_Public/brands-public.service';
import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/Interfaces/Brands/Brands.interface';

@Component({
  selector: 'app-brandpu-list-public',
  templateUrl: './brandpu-list-public.component.html',
  styleUrls: ['./brandpu-list-public.component.css']
})
export class BrandpuListPublicComponent implements OnInit {

  constructor(private BrandSer:BrandsPublicService, private toaster:ToastrService) { }
  Brands: Array<Brands> = [];

  ngOnInit(): void {
    this.GetBrands()
  }

  GetBrands(){
    this.BrandSer.getBrandsApi().subscribe(
      (res) => {
        this.Brands = res
      },
      (error) => {
        this.toaster.error(error);
      }
    )
  }
}
