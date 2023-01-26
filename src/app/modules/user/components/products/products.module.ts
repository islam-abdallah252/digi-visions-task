import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];
@NgModule({
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
