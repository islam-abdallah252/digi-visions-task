import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutes } from './authorization.routing';

@NgModule({
  imports: [CommonModule, AuthorizationRoutes],
  declarations: [],
})
export class AuthorizationModule {}
