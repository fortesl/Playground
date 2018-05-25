import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeTo]'
})

export class ChangeToDirective {
  constructor(private el: ElementRef) { }

  // tslint:disable-next-line:no-input-rename
  @Input('appChangeTo') change;

  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {
      this.el.nativeElement.value = this.change || 'I Love Directives';
    }
  }

}

