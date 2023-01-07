import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductList?:Product[];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getProducts();
    console.log(this.cartProductList);
  }
  removeProduct(product:Product) {
    this.cartService.removeProduct(product);
  }
}
