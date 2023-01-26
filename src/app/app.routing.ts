import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';
import { AuthLoginAdminGuard } from './modules/core/guards/auth-login-admin.guard';
import { AuthLoginUserGuard } from './modules/core/guards/auth-login-user.guard';
import { DeleteDialogComponent } from './modules/shared/components/delete-dialog/delete-dialog.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authorization/authorization.module').then(
        (mod) => mod.AuthorizationModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((mod) => mod.UserModule),
    canActivate: [AuthLoginUserGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
    canActivate: [AuthLoginAdminGuard],
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
  providers: [AuthLoginUserGuard, AuthLoginAdminGuard],
  entryComponents: [DeleteDialogComponent],
})
export class AppRoutingModule {}
