import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeToDirective } from './directives/change-to.directive';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeToDirective
  ],
  providers: [ ],
  exports: [ ChangeToDirective ]
})
export class SogetiCommonModule { }
