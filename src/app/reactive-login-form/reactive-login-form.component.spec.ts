import { FormBuilder } from '@angular/forms';

import { ReactiveLoginFormComponent } from './reactive-login-form.component';

describe('ReactiveLoginFormComponent', () => {
  let component: ReactiveLoginFormComponent;

  beforeEach(() => {
    component = new ReactiveLoginFormComponent(new FormBuilder());
  });

  it('should create form', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form group with username and password input controls', () => {
    expect(component.form.contains('login')).toBeTruthy();
    expect(component.form.value.login['username']).toBeDefined();
    expect(component.form.value.login['password']).toBeDefined();
  });

  it('should make the username value required, with a minlength of 3 characters', () => {
    const control = component.form.get('login.username');

    control.setValue('');

    expect(control.invalid).toEqual(true);

    control.setValue('12');

    expect(control.invalid).toEqual(true);

    control.setValue('123');

    expect(control.invalid).toEqual(false);
  });

  it('should make the password value required, with a minlength of 8 characters', () => {
    const control = component.form.get('login.password');

    control.setValue('');

    expect(control.invalid).toEqual(true);

    control.setValue('1234567');

    expect(control.invalid).toEqual(true);

    control.setValue('12345678');

    expect(control.invalid).toEqual(false);
  });
});
