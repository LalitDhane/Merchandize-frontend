import { ProductCardService } from './shared/product-card.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, LoginComponent, SignupComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FontAwesomeModule],
  providers: [ProductCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
