import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: Array<any> = [];
  productList = new BehaviorSubject<any>([]);
  Search = new BehaviorSubject<string>("");
  constructor() {}
  GetProduct(){
    return this.productList.asObservable();
  }
  addtocart(itemdata:any){
    this.cartItem.push(itemdata);
    this.productList.next(this.cartItem);
    this.getTotalPrice();
  }

  deleteProduct(id:number){
    this.cartItem.splice(id,1);
    this.productList.next(this.cartItem);
  }

  getTotalPrice() :number{
    let granttota = 0;
    this.cartItem.map((a:any) => {
      granttota += a.total
    })
    return granttota;
  }

  remaovAllItem(){
    this.cartItem.splice(0, this.cartItem.length);
    this.productList.next(this.cartItem);
  }


}
