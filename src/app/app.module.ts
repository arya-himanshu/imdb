import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieserviceService } from './service/movie/movieservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
