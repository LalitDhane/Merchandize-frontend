
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  url: string = 'http://localhost:3001/api/products';
  constructor(private httpClient: HttpClient) {}
  
  public getProducts(){
    return this.httpClient.get(this.url);
  }
}
