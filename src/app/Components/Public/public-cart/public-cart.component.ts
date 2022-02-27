import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../../Services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-cart',
  templateUrl: './public-cart.component.html',
  styleUrls: ['./public-cart.component.css']
})
export class PublicCartComponent implements OnInit {
  quantity = 1;
  public CartProduct: Array<any> = [];
  public grandTota: number = 0;
  constructor(private cartSer: CartService, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.cartSer.GetProduct().subscribe(result => {
      this.CartProduct = result;
      this.grandTota = this.cartSer.getTotalPrice();
    })
  }

  increment(){
    this.quantity ++;
    this.grandTota = this.cartSer.getTotalPrice()
  }
  Decrease(){
    this.quantity --
    if(this.quantity < 2){
      this.quantity = 1;
    };
    this.grandTota = this.cartSer.getTotalPrice()
  }

  DeletItem(item:any, id: number){
    this.cartSer.deleteProduct(id);
    this.toaster.success(`${item.name}`,'Product Delete Successfuly',{
      timeOut: 1500,
    });
    this.saveAll()
  }

  RemoveItems(){
    this.cartSer.remaovAllItem();
    this.toaster.success('Cart Clear Successfuly','',{
      timeOut: 1500,
    });
    this.saveAll()
  }

  saveAll(){
    localStorage.setItem('Products', JSON.stringify(this.CartProduct))
  }
}
