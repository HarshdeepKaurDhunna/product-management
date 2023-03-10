import { createAction, props } from '@ngrx/store';
import { Product } from './product-data.model';

enum Actions {
    PRODUCT_DATA = '[Product Data] Set Table Data',
    RESET_DATATABLE_STORE = '[Product Data] Reset Store',
   
  }
/* Load actions used in the httpclient in effects */
export const loadProducts = createAction('[Product List] Load Products');
export const loadProductSuccess = createAction('[Product List] Load Products Success', props<{products: Product[]}>());
export const loadProductError = createAction('[Product List] Load Products Error');

/* actions used in the set data for datatabel in store */
export const setData = createAction(Actions.PRODUCT_DATA, props<{ data: any}>());
export const resetDataTableStore = createAction(Actions.RESET_DATATABLE_STORE);




