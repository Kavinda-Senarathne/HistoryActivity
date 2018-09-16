import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ContentsService } from './contents.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  public history=[];
  constructor(private contentsService:ContentsService){}
  ngOnInit() {
    this.contentsService.getHistoryData()
    .subscribe(data => this.history= data);


  }

}






