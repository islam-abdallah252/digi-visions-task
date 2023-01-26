import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
