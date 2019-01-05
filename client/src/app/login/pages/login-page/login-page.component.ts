import { Component, OnInit }    from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService}            from '../../../backend-api/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userName = new FormControl();
  password = new FormControl();
  loginForm: FormGroup;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': this.userName,
      'password': this.password,
    });
  }

  submitLoginForm() {
    const formValues = this.loginForm.getRawValue();
    this._userService.login(formValues.userName, formValues.password);
  }
}
