import { createAction, props } from '@ngrx/store';
import { Product } from './product-data.model';

enum Actions {
    PRODUCT_DATA = '[Product Data] Set Table Data',
    RESET_DATATABLE_STORE = '[Product Data] Reset Store',
   
  }
export const loadProducts = createAction('[Product List] Load Products');
export const loadProductSuccess = createAction('[Product List] Load Products Success', props<{products: Product[]}>());
export const loadProductError = createAction('[Product List] Load Products Error');

export const setData = createAction(Actions.PRODUCT_DATA, props<{ data: any}>());
export const resetDataTableStore = createAction(Actions.RESET_DATATABLE_STORE);




