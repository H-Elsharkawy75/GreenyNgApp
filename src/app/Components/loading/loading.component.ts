import { LoadingService } from './../../Services/loading/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$ = this.loader.Loader$
  constructor(private loader:LoadingService) { }

  ngOnInit(): void {
  }

}
