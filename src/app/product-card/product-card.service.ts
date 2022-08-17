import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3001/api/products';
  }
  public getProducts() {
    this.httpClient.get(this.url).subscribe((data) => {
      console.log(data);
    });
  }
}
