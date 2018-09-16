import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import {History} from '../models/history';

@Injectable()
export class ContentsService {
   private apiUrl:string= '../../assets/data/historyData.json';
   constructor(private http:HttpClient) {

   }
   getHistoryData(){
     return this.http.get<History[]>(this.apiUrl);
   }
}
