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
  public products?: Product[];
  public loading: boolean = true;
  constructor(
    private productService: ProductCardService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.loading = false;
    });
  }
  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
