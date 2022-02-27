import { ProductsService } from './../../../../Services/Products/products.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';

@Component({
  selector: 'app-product-view-popup',
  templateUrl: './product-view-popup.component.html',
  styleUrls: ['./product-view-popup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductViewPopupComponent implements OnInit {
  thumbsSwiper: any;




  ProductItem:Array<ProductDetailsInterface> = [];


  @Input() DetailsProduct:any ;
  constructor() {
    // this.ProductItem = this.DetailsProduct;
  }

  ngOnInit(): void {
  }

}
