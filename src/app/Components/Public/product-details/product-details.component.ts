import { map } from 'rxjs';
import { ProductsInterface } from './../../../Interfaces/Products.interface';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../../Services/cart/cart.service';
import { ProductsService } from './../../../Services/Products/products.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ProductDetailsComponent implements OnInit {
  ProductId: any;
  product: any;
  thumbsSwiper: any;

  ProductDetails:Array<ProductDetailsInterface> = [];
  RelatedProduct: Array<ProductsInterface> =[];

CategoryId!:any;
CategoryIdsss:any;
  constructor(
    private ActiRoout:ActivatedRoute,
    private ProdSer:ProductsService,
    private cartSer:CartService,
    private toaster:ToastrService,
    private Router:Router) {


    }

  ngOnInit(): void {
    this.ProductId = this.ActiRoout.snapshot.paramMap.get('id');
    this.ProdSer.GetProductDetails(this.ProductId).subscribe( data => {
      this.product = data;
    });

    // this.GitRelatedProd(this.CategoryId);
    this.GetProduct(this.CategoryId);

  }


  AddToCart(ProductItem:any){
    this.cartSer.addtocart(ProductItem);
    this.toaster.success(`${ProductItem.name} Add Successfully`);
  }

  PrivewDetails(id:number): void{
    this.ProdSer.GetProductDetails(id).subscribe(
      (data) => {
        this.ProductDetails = data;
      },
      (error) => {
        this.toaster.error(error);
      }
    )
  }

  // GitRelatedProd(CategoryID:any){
  //   this.ProdSer.GetProducts()
  //   .pipe(
  //     map(Products => Products.filter(prod => prod.CategoryID == CategoryID))
  //   ).subscribe(
  //     (result) => {
  //       this.RelatedProduct = result;
  //     },
  //     (error) => {
  //       this.toaster.error(error);
  //     }
  //   )
  // }

  GetProduct(CATID:any){
    this.ProdSer.GetProducts()
    // .pipe(
    //   map( Products => Products.filter(Prod => Prod.CategoryID = CATID ))
    // )
    .subscribe(
      (result) => {
        this.RelatedProduct = result;
      },
      (error) => {
        this.toaster.error(error);
      }
    )
  }

  // GotoProd(Product:any){
  //   this.CategoryId = +Product.CategoryID;
  //   this.Router.navigate(['Products', Product.ProductId], {
  //     queryParams: {
  //       // Name: Product.name,
  //     }
  //   })
  // }
}
