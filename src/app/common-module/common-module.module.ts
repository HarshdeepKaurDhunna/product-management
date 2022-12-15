import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';


@NgModule({
  declarations: [
    CommonHeaderComponent,
    CommonFooterComponent
  ],
  imports: [
    CommonModule,
    CommonModuleRoutingModule
  ],
  exports: [
    CommonHeaderComponent,
    CommonFooterComponent
  ]
})
export class CommonModuleModule { }
