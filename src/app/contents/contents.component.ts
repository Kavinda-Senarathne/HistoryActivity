import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { History } from '../models/history';
import { ContentsService } from './contents.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  history: History[] = [];
  i = this.history.indexOf;
  displayHistory: History[] = [];
  viewText : History[] = [];
  constructor(private contentsService: ContentsService) { }
  ngOnInit() {
    this.contentsService.getHistoryData()
      .subscribe(data => this.history = data);
  }
  navAll() {
    let history = this.history;
    this.displayHistory = this.history;
  }
  navNotes() {
    this.displayHistory = (_.filter(this.history, ['type', 'note']));
  }
  navMeetings() {
    this.displayHistory = (_.filter(this.history, ['type', 'meeting']));
  }
  navMails() {
    this.displayHistory = (_.filter(this.history, ['type', 'email']));
  }
  viewTask:boolean = false;
}
 






