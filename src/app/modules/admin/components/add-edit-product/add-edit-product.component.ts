import { ProductsService } from 'src/app/modules/core/services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AddEditProductComponent>,
    public formBuilder: FormBuilder,
    private productsService: ProductsService,
    private authService: AuthService
  ) {
    this.productForm = this.formBuilder.group({
      title: [
        this.data ? this.data.title : '',
        Validators.compose([Validators.required]),
      ],
      price: [
        this.data ? this.data.price : '',
        Validators.compose([Validators.required]),
      ],
      description: [
        this.data ? this.data.description : '',
        Validators.compose([Validators.required]),
      ],
      image: [this.data ? this.data.image : ''],
      category: [
        this.data ? this.data.category : '',
        Validators.compose([Validators.required]),
      ],
    });
  }

  ngOnInit() {
    console.log(this.data, 'data');
  }
  saveForm(form: FormGroup) {
    if (!form.valid) return;
    if (this.data?.id) {
      this.editProduct(form.value);
    } else {
      this.addProduct(form.value);
    }
  }

  addProduct(data: any) {
    this.productsService.addProducts(data).subscribe((res) => {
      if (res) {
        this.authService.showToaster('new product is added  successfully');
        this.dialogRef.close(res);
      }
    });
  }
  editProduct(data: any) {
    this.productsService.updateProducts(this.data.id, data).subscribe((res) => {
      if (res) {
        this.authService.showToaster('product updated successfully');
        this.dialogRef.close(res);
      }
    });
  }
}
