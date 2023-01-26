import { IProduct } from './../../shared/interfaces/product.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  getProductsByCategory(category: string) {
    return this.http.get(`${this.url}products/category/${category}`);
  }

  deleteProducts(id: number) {
    return this.http.delete(`${this.url}products/${id}`);
  }
  updateProducts(id: number, product: IProduct) {
    return this.http.put(`${this.url}products/${id}`, product);
  }
  addProducts(product: IProduct) {
    return this.http.post(`${this.url}products/`, product);
  }
}
