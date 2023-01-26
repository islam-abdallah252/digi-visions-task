import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private url = environment.url;
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.url}products/categories`);
  }
}
