import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as productDataReducer from './product-data.reducers';
import { ProductDataEffects } from './product-data.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      productDataReducer.productDataFeatureKey,
      productDataReducer.ProductDataReducer
    ),
    EffectsModule.forFeature([ProductDataEffects])
  ],
})
export class ProductDataModule { }
