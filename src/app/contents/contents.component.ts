import { Component, OnInit } from '@angular/core';
import {History} from '../models/history';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  history:History[];
  constructor() { }


  
  ngOnInit() {
  }

}
