import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';


@NgModule({
  declarations: [
    CommonHeaderComponent,
    CommonFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonHeaderComponent,
    CommonFooterComponent
  ]
})
export class CommonModuleModule { }
