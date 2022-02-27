import { AuthService } from './../../../Services/auth/auth.service';
import { CartService } from './../../../Services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryHome } from 'src/app/Interfaces/CategoryHome.interface';
import { CategoryHomeService } from 'src/app/Services/CategoryHome/category-home.service';

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent implements OnInit {
  category:Array<CategoryHome> = []
  public totalItem: number = 0;
  isLogedIn:boolean = true ;
  SearchTerm:string = '';
  constructor(private CateHomSer:CategoryHomeService,
    private toastr:ToastrService,
    private cartSer: CartService,
    private _AuthSer:AuthService) { }

GetCategoryHomeData(){
  this.CateHomSer.getCategoryApi().subscribe(
    (data) => {
      this.category = data
    },
    (error) => {
      this.toastr.error(error);
    }
  )
}

  ngOnInit(): void {
    this.GetCategoryHomeData();
    this.cartSer.GetProduct().subscribe(ressselt => {
      this.totalItem = ressselt.length;
    });

    this.UserIsLogedIn();
  }

  Search(eavent:any){
    this.SearchTerm = (eavent.target as HTMLInputElement).value;
    this.cartSer.Search.next(this.SearchTerm);
  }

  UserIsLogedIn(){
    this.isLogedIn = this._AuthSer.islogedin()
  }

  Logout(){
    this._AuthSer.userlogout();
  }

}
