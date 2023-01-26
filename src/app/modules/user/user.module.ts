import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, UserRoutes, SharedModule],
  declarations: [UserComponent, ProductsComponent, ProductComponent],
})
export class UserModule {}
