import { CartService } from './../../../../Services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from './../../../../Services/Products/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/Interfaces/Products.interface';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';

@Component({
  selector: 'app-solid-item',
  templateUrl: './solid-item.component.html',
  styleUrls: ['./solid-item.component.css']
})
export class SolidItemComponent implements OnInit {

  SolidItems:Array<ProductsInterface>= [];
  ProductDetails:Array<ProductDetailsInterface> = [];
  searchKey:string = "";
  constructor(private ProdServ:ProductsService, private toaster:ToastrService, private cartSer: CartService) { }
  ngOnInit(): void {
    this.getProductData();
    this.cartSer.Search.subscribe((val:any) => {
      this.searchKey = val
    })
  }

  getProductData(){
    this.ProdServ.GetProducts().subscribe(
      (data) => {
        this.SolidItems = data;

        this.SolidItems.forEach((a:any) => {
          Object.assign(a, {quantity: 1, total: a.price.new})
        })
      },
      (error) => {
        this.toaster.error(error);
      }
    )
  }

  PrivewDetails(id:number): void{
    this.ProdServ.GetProductDetails(id).subscribe(
      (data) => {
        this.ProductDetails = data;
      },
      (error) => {
        this.toaster.error(error);
      }
    )
  }

AddToCart(DataItem:any){
this.cartSer.addtocart(DataItem);
this.toaster.success(`${DataItem.name}`, 'Add Successfuly',{
  timeOut: 1500,
});
}


}
