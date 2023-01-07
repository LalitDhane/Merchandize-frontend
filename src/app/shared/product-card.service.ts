import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Observable } from 'rxjs';
import { Product } from '../Models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  URL: string = 'https://homemadebags-backend.onrender.com/api/products';
  constructor(private httpClient: HttpClient) {}

  public getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL);
  }
}
