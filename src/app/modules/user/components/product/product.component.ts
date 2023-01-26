import { IProduct } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/modules/core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productDetails: IProduct = {} as IProduct;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails(id: number) {
    console.log(id); //log the
    this.productsService.getProductsById(id).subscribe((product: any) => {
      this.productDetails = product;
    });
  }
}
