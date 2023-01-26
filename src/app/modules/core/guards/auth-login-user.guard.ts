import { AuthService } from '../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class AuthLoginUserGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate() {
    if (localStorage.getItem('guard_type') === 'user') {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
