import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductDataModule } from './product-data/product-data.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),

    EffectsModule.forRoot([]),
    ProductDataModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10, 
      autoPause: true, 
    }),
  ]
})
export class NgrxStoreModule { }
