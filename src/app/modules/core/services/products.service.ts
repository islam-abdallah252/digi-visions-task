import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = environment.url;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.url}products`);
  }
  getProductsById(id: number) {
    return this.http.get(`${this.url}products/${id}`);
  }
}
