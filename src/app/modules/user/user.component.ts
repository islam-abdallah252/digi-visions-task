import { AuthService } from './../core/services/auth.service';
import { CategoriesService } from './../core/services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  categories: any;
  constructor(
    private categoriesService: CategoriesService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }
  logout() {
    this.authService.logOut();
  }
  setting() {
    this.authService.showToaster('Unfortunately this feature coming soon');
  }
  changeLang() {
    this.authService.showToaster('Unfortunately this feature coming soon');
  }
}
