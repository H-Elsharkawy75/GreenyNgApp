import { CategoryDetailsPublicComponent } from './Components/Public/CatgoryPublicPage/category-details-public/category-details-public.component';
import { PublicProductsComponent } from './Components/Public/public-products/public-products.component';
import { PublicCartComponent } from './Components/Public/public-cart/public-cart.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactUSPublicComponent } from './Components/Public/contact-us-public/contact-us-public.component';
import { AboutUSPublicComponent } from './Components/Public/about-us-public/about-us-public.component';
import { IndexPublicComponent } from './Components/Public/index-public/index-public.component';
import { PublicLayoutComponent } from './Components/Public/public-layout/public-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/Public/product-details/product-details.component';
import { BrandpuListPublicComponent } from './Components/Public/Brand_Page_Public/brandpu-list-public/brandpu-list-public.component';
import { BrandDetailsComponent } from './Components/Public/Brand_Page_Public/BrandDetails/brand-details/brand-details.component';

const routes: Routes = [
  {path: '', component:PublicLayoutComponent, children:[
    {path:'', component:IndexPublicComponent},
    {path:'AboutUs', component:AboutUSPublicComponent},
    {path:'Cart', component:PublicCartComponent},
    {path:'ContactUs', component:ContactUSPublicComponent},
    {path:'Category/:id', component:CategoryDetailsPublicComponent},
    {path:'Products', component:PublicProductsComponent},
    {path:'Products/:id', component:ProductDetailsComponent},
    {path:'Brands', component:BrandpuListPublicComponent},
    {path:'Brands/:id', component:BrandDetailsComponent}
  ]},
  // Account routs
  {path: 'Account', loadChildren:() => import('./Modules/account/account-routing.module')
  .then(m => m.AccountRoutingModule)},



  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
