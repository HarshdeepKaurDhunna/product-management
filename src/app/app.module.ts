import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxStoreModule } from './ngrx-store/ngrx-store.module';


import { CommonModuleModule } from './common-module/common-module.module';
import { ProductModuleModule } from './product-module/product-module.module';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModuleModule,
    ProductModuleModule,
    HttpClientModule,
    NgrxStoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
