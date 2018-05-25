import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CustomValidators } from '../common/validators/custom-validators';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {
  form: FormGroup;
  loginFailed;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      login: fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.cannotContainDashes]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }),
    });
   }

  ngOnInit() {
  }

  get username() {
    return this.form.get('login.username');
  }

  get password() {
    return this.form.get('login.password');
  }

  submit(value) {
    console.log(value);
  }

}
