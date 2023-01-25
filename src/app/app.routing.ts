import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authorization/authorization.module').then(
        (mod) => mod.AuthorizationModule
      ),
  },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
