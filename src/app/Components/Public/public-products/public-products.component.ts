import { CartService } from './../../../Services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';
import { ProductsService } from './../../../Services/Products/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/Interfaces/Products.interface';

@Component({
  selector: 'app-public-products',
  templateUrl: './public-products.component.html',
  styleUrls: ['./public-products.component.css']
})
export class PublicProductsComponent implements OnInit {

  SearchWord:string = '';
  Products: Array<ProductsInterface> = [];
  ProductDetails:Array<ProductDetailsInterface> = [];

  totalLenght: any;
  page:number = 1;
  constructor(private ProdSer:ProductsService, private toaster:ToastrService, private cartSer:CartService) { }

  ngOnInit(): void {
    this.ProdSer.GetProducts().subscribe( data => {
      this.Products = data;
      this.totalLenght = data.length;
      this.Products.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price.new})
      })
    });

    this.cartSer.Search.subscribe((val:any) => {
      this.SearchWord = val
    })
  }

  onSubmit(){
    alert(this.SearchWord);
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

  AddToCart(ProdData:any){
    this.cartSer.addtocart(ProdData);
    this.toaster.success(`${ProdData.name}`, 'Add Successfuly',{
      timeOut: 1500,
    });
  }

}
