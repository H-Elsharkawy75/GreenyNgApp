import { Component, OnInit } from '@angular/core';

import SwiperCore, { EffectCoverflow, Navigation, Pagination , EffectCards, Swiper, FreeMode, Thumbs, SwiperOptions } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);
SwiperCore.use([FreeMode, Navigation, Thumbs]);
SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([EffectCards]);
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-index-public',
  templateUrl: './index-public.component.html',
  styleUrls: ['./index-public.component.css'],

})
export class IndexPublicComponent implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  ngOnInit(): void {
  }

}
