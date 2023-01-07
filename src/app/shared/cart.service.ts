import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartProductList:Product[] = [];
  constructor() { 

  }
  addProduct(product:Product) {
    this.CartProductList.push(product);
  }
  removeProduct(product:Product) {
    this.CartProductList.forEach((element,index) => {
      if(element.code == product.code)
          this.CartProductList.splice(index,1);
    })
  } 
  getProducts() : Product[] {
      return this.CartProductList;
  }
}
