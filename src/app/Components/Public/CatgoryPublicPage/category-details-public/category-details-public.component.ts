import { CategoryHomeService } from 'src/app/Services/CategoryHome/category-home.service';
import { CartService } from './../../../../Services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from './../../../../Services/Products/products.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsInterface } from 'src/app/Interfaces/Products.interface';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-category-details-public',
  templateUrl: './category-details-public.component.html',
  styleUrls: ['./category-details-public.component.css']
})
export class CategoryDetailsPublicComponent implements OnInit {

  CategoryItem: any ={};
  CategoryID: any;
  CategoryProducts: Array<ProductsInterface> = [];
  ProductDetails: Array<ProductDetailsInterface> =[];
  constructor(
    private ActivateRout: ActivatedRoute,
    private ProductSer: ProductsService,
    private CategorySer: CategoryHomeService,
    private Toaster:ToastrService,
    private CartSer: CartService
    ) { }

  ngOnInit(): void {
    this.CategoryID = this.ActivateRout.snapshot.paramMap.get('id');
    this.GetProducts(this.CategoryID);
    this.GetCatgoryDetails(this.CategoryID)
  }



  GetCatgoryDetails(CategoryID:any){
    this.CategorySer.GetCategoryOnly(CategoryID).subscribe(
      (data) => {
        this.CategoryItem = data
      },
      (error) => {
        this.Toaster.error(error)
      }
    )
  }

  GetProducts(CateID:any){
    this.ProductSer.GetProducts()
    .pipe(
      map(Products => Products.filter(Prod => Prod.CategoryID == CateID))
    )
    .subscribe(
      (data) => {
        this.CategoryProducts = data;
      },
      (error) => {
        this.Toaster.error(error)
      }
    )
  }

  PrivewDetails(ProdId:any){
    this.ProductSer.GetProductDetails(ProdId).subscribe(
      (dataDetails) => {
        this.ProductDetails = dataDetails;
      },
      (error) => {
        this.Toaster.error(error);
      }
    )
  }

  AddtoCart(ProductItem:any){
    this.CartSer.addtocart(ProductItem);
    this.Toaster.success(`${ProductItem.name}`, 'Add Successfuly',{
      timeOut: 1500,
    });
  }


}
