import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';
import { CartService } from './../../../../../Services/cart/cart.service';
import { ProductsService } from './../../../../../Services/Products/products.service';
import { ToastrService } from 'ngx-toastr';
import { BrandsPublicService } from './../../../../../Services/Brands_Public/brands-public.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsInterface } from 'src/app/Interfaces/Products.interface';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  BrandDetails:any = {};
  BrandId: any;
  BrandProducts: Array<ProductsInterface> = [];
  FilterProductsLenght : any;
  ProductDetails:Array<ProductDetailsInterface> = [];

  constructor(private ActivateRout: ActivatedRoute,
    private BrandSer:BrandsPublicService,
    private Toaster:ToastrService,
    private ProductSer:ProductsService,
    private cartSer: CartService
    ) { }

  ngOnInit(): void {
    this.BrandId = this.ActivateRout.snapshot.paramMap.get('id');
    this.GetBrandOnly(this.BrandId);
    this.GetBrandProducts(this.BrandId);
  }

  GetBrandOnly(BrandId:any){
    this.BrandSer.getBarndOnly(BrandId).subscribe(
      (res) => {
        this.BrandDetails = res;
      },
      (error) => {
        this.Toaster.error(error);
      }
    )
  }

  GetBrandProducts(BrandId:any){
    this.ProductSer.GetProducts()
    .pipe(
      map(Productsx => Productsx.filter(prod => prod.BrandID == BrandId))
    )
    .subscribe(
      (res) => {
        this.FilterProductsLenght = res.length;
        this.BrandProducts = res;
      }
    )
  }

  AddtoCart(dataProduct:any){
    this.cartSer.addtocart(dataProduct);
    this.Toaster.success(`${dataProduct.name}`, 'Add Successfuly',{
      timeOut: 1500,
    });
  }

  PrivewDetails(prodId:any){
    this.ProductSer.GetProductDetails(prodId).subscribe(
      (res) => {
        this.ProductDetails = res;
      },
      (error) => {
        this.Toaster.error(error);
      }
    );
  }


}
