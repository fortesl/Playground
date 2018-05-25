import { ChangeToDirective } from './change-to.directive';
import { ElementRef } from '@angular/core';

describe('ChangeToDirective', () => {
  let directive: ChangeToDirective;
  const element = '<input name="directive" [appChangeTo]="George" value="joe">';

  beforeEach(() => {
    directive = new ChangeToDirective(new ElementRef(element));
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  //  it('should change input value on blur', () => {
  //   directive.change = 'i love this game';

  //  });
});
