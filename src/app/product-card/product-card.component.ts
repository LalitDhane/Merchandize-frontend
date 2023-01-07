import { ProductCardService } from './../shared/product-card.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductCardService, 
    private cartService : CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  addToCart(product:Product) {
    this.cartService.addProduct(product);
  }
}
