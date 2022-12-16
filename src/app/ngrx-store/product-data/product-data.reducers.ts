import { Action, createReducer, on } from '@ngrx/store';
import * as ProductDataActions from './product-data.actions';
import { ProductTableState } from './product-data.model';


export const INITIAL_STATE: ProductTableState = {
  tableData: [],
  sortDirection: '',
  sortKey: '',
};

export const productDataFeatureKey = 'dataTable';


export const productDataReducer = createReducer(
  INITIAL_STATE,
  on(ProductDataActions.setData, (state, { data }) => {
    return {
      ...state,
      tableData: data
    };
  }),

  on(ProductDataActions.resetDataTableStore, state => {
    return {
      ...state,
      ...INITIAL_STATE
    };
  }),

);

export function ProductDataReducer(state: ProductTableState, action: Action) {
  return productDataReducer(state, action);
}
