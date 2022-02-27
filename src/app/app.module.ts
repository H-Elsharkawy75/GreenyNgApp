import { NetworkInterceptor } from './Interceptors/network/network.interceptor';
import { AccountModule } from './Modules/account/account.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './Components/Public/public-layout/public-layout.component';
import { NavbareComponent } from './Components/Public/navbare/navbare.component';
import { IndexPublicComponent } from './Components/Public/index-public/index-public.component';
import { FooterPublicComponent } from './Components/Public/footer-public/footer-public.component';
import { ContactUSPublicComponent } from './Components/Public/contact-us-public/contact-us-public.component';
import { AboutUSPublicComponent } from './Components/Public/about-us-public/about-us-public.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbAlertModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSlidreComponent } from './Components/Public/main-slidre/main-slidre.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CategorysliderHomeComponent } from './Components/Public/HomePage/categoryslider-home/categoryslider-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SolidItemComponent } from './Components/Public/HomePage/solid-item/solid-item.component';
import { SwiperModule } from 'swiper/angular';
import { ProductViewPopupComponent } from './Components/Public/HomePage/product-view-popup/product-view-popup.component';
import { MedilMediaComponent } from './Components/Public/HomePage/medil-media/medil-media.component';
import { CollectedItemComponent } from './Components/Public/HomePage/collected-item/collected-item.component';
import { PublicCartComponent } from './Components/Public/public-cart/public-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Shared/pipes/filter.pipe';
import { ProductDetailsComponent } from './Components/Public/product-details/product-details.component';
import { PublicProductsComponent } from './Components/Public/public-products/public-products.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { BrandsComponent } from './Components/Public/HomePage/brands/brands.component';
import { MediaTwoComponent } from './Components/Public/HomePage/media-two/media-two.component';
import { SubscriptonPublicComponent } from './Components/Public/HomePage/subscripton-public/subscripton-public.component';
import { BrandpuListPublicComponent } from './Components/Public/Brand_Page_Public/brandpu-list-public/brandpu-list-public.component';
import { BrandDetailsComponent } from './Components/Public/Brand_Page_Public/BrandDetails/brand-details/brand-details.component';
import { CategoryPagePublicComponent } from './Components/Public/CatgoryPublicPage/category-page-public/category-page-public.component';
import { CategoryDetailsPublicComponent } from './Components/Public/CatgoryPublicPage/category-details-public/category-details-public.component';
import { PublicTestimonialComponent } from './Components/Public/public-testimonial/public-testimonial.component';
import { PublicOurTeamComponent } from './Components/Public/HomePage/public-our-team/public-our-team.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    NavbareComponent,
    IndexPublicComponent,
    FooterPublicComponent,
    ContactUSPublicComponent,
    AboutUSPublicComponent,
    NotFoundComponent,
    MainSlidreComponent,
    CategorysliderHomeComponent,
    SolidItemComponent,
    ProductViewPopupComponent,
    MedilMediaComponent,
    CollectedItemComponent,
    PublicCartComponent,
    FilterPipe,
    ProductDetailsComponent,
    PublicProductsComponent,
    LoadingComponent,
    BrandsComponent,
    MediaTwoComponent,
    SubscriptonPublicComponent,
    BrandpuListPublicComponent,
    BrandDetailsComponent,
    CategoryPagePublicComponent,
    CategoryDetailsPublicComponent,
    PublicTestimonialComponent,
    PublicOurTeamComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    CarouselModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
