import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [LoginComponent],
})
export class LoginModule {}
