import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  constructor(
    public formBuilder: UntypedFormBuilder,
    public authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  login(form: UntypedFormGroup) {
    this.authService.login(form.value);
  }
}
