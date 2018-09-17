import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { ContentsService } from './contents/contents.service';



@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ContentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
