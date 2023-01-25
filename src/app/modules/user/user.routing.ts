import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user.module').then((mod) => mod.UserModule),
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./components/products/products.module').then(
            (mod) => mod.ProductsModule
          ),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('./components/product/product.module').then(
            (mod) => mod.ProductModule
          ),
      },
    ],
  },
  {},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutes {}
