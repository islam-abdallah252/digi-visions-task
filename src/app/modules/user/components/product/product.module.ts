import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BarRatingModule } from 'ngx-bar-rating';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    BarRatingModule,
  ],
  declarations: [ProductComponent],
})
export class ProductModule {}
