
import { ProductCardService } from './../shared/product-card.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: any;
  constructor(private productService:ProductCardService) { 
    
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {this.products = res},
      )
  }

}
