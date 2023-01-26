import { Route, Router, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dataUsers: IUser[] = [
    {
      name: 'user',
      password: 'user',
    },
    {
      name: 'admin',
      password: 'admin',
    },
  ];
  constructor(private router: Router, private _snackBar: MatSnackBar) {}
  login(user: IUser): void {
    const checkUserAvailable = this.dataUsers.find((u) => u.name === user.name);
    if (checkUserAvailable?.password === user.password) {
      this.setInLocal(user);

      this.showToaster('Successfully logged in');
    } else {
      this.showToaster('Password or user not valid');
    }
  }

  showToaster(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  logOut() {
    this.router.navigate(['/auth/login']);
    this.removeInLocal();
  }
  getDataUser() {
    const user = JSON.parse(localStorage.getItem('auth_user') as any);
    return user;
  }
  setInLocal(user: IUser) {
    localStorage.setItem('auth_user', JSON.stringify(user));
    localStorage.setItem('guard_type', user.name);
    if (user.name === 'admin') {
      this.router.navigate(['/admin/products']);
    } else if (user.name === 'user') {
      this.router.navigate(['/user/products']);
    }
  }
  removeInLocal() {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('guard_type');
  }
}
