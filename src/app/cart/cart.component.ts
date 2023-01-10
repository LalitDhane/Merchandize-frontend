import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Models/Product';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProductList: Product[] = [];
  checkOutValueObject = {
    subTotal: 0,
    cartSize: 0,
    shippingCharges: 0,
    isCheckedOut: false,
  };
  deleteIcon = faTrash;
  isCartEmpty: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getProducts();
    this.checkOutValueObject = this.cartService.getCheckOutValueObject();
  }

  ngDoCheck(): void {
    this.cartService.updateLocalStorage();
    this.cartProductList = this.cartService.getCartProductList();
    this.checkOutValueObject = this.cartService.updateAndReturnCheckOutValueObject();
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
  }

  isCartEmptyToggler() {
    this.isCartEmpty = true;
  }
}
