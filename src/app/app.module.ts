import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { ContentsService } from './contents/contents.service';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
