import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['categoryName']) {
        this.getProductByCategory(params['categoryName']);
      } else {
        this.getAllProducts();
      }
    });
  }
  getAllProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  getProductByCategory(category: string) {
    this.productsService
      .getProductsByCategory(category)
      .subscribe((product: any) => {
        this.products = product;
      });
  }
}
