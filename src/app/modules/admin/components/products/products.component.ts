import { DeleteDialogComponent } from './../../../shared/components/delete-dialog/delete-dialog.component';
import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/modules/shared/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsAdminComponent implements OnInit {
  products!: IProduct[];
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'description',
    'category',
    'actions',
  ];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productsService.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }
  edit(product: IProduct) {
    this.authService.showToaster('Unfortunately this feature coming soon');
  }
  delete(product: IProduct) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.productsService
          .deleteProducts(product.id)
          .subscribe((res: any) => {
            if (res) {
              this.products = this.products.filter((p) => p.id != product.id);
              this.authService.showToaster('product deleted successfully');
            }
          });
      }
    });
  }
  openDialogProduct(product: IProduct | null) {
    // this.authService.showToaster('Unfortunately this feature coming soon');
    const dialogRef = this.dialog.open(AddEditProductComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result) {
        const getIndex = this.products.findIndex(
          (product) => product.id === result.id
        );
        console.log(getIndex);
        if (getIndex == -1) {
          this.products = [result, ...this.products];
        } else {
          this.products[getIndex] = result;
          this.products = [...this.products];
        }
      }
    });
  }
}
