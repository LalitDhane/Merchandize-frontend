import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProductList?: Product[];
  subTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getProducts();
    this.updateSubTotal();
  }

  updateSubTotal() {
    this.subTotal = 0;
    this.cartProductList?.forEach((product) => {
      this.subTotal += product.specialPrice * product.quantity;
    });
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.updateSubTotal();
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
    this.updateSubTotal();
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
    this.updateSubTotal();
  }

  checkOut() {
    // TODO: implement checkout Logic.
  }
}
