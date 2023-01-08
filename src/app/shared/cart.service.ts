import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartProductList: Product[] = [];
  constructor() {}
  
  findAndGetProductIndex(product:Product) {
    return this.CartProductList.findIndex(
      (element) => element._id === product._id
    );
  }

  addProduct(product: Product) {
    const existingProductIndex = this.findAndGetProductIndex(product);
    if (existingProductIndex !== -1) {
      this.CartProductList[existingProductIndex].quantity++;
    } else {
      product.quantity = 1;
      this.CartProductList.push(product);
    }
  }

  increaseQuantity(product:Product) {
    const productIndex = this.findAndGetProductIndex(product);
    this.CartProductList[productIndex].quantity++;
  }

  decreaseQuantity(product:Product) {
    const productIndex = this.findAndGetProductIndex(product);
    if(this.CartProductList[productIndex].quantity > 1)
      this.CartProductList[productIndex].quantity--;
  }

  removeProduct(product: Product) {
    this.CartProductList.forEach((element, index) => {
      if (element._id === product._id) this.CartProductList.splice(index, 1);
    });
  }

  getProducts(): Product[] {
    return this.CartProductList;
  }
}
