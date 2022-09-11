import { ProductCardService } from './shared/product-card.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
