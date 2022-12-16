import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductTableState } from './product-data.model';
import * as productDataReducer from './product-data.reducers';

export const selectDataTableState = createFeatureSelector<ProductTableState>(productDataReducer.productDataFeatureKey);

export const selectSortDirection = createSelector(selectDataTableState, (state: ProductTableState) => state.sortDirection);
export const selectSortKey = createSelector(selectDataTableState, (state: ProductTableState) => state.sortKey);
export const selectTableData = createSelector(selectDataTableState, (state: ProductTableState) => state.tableData);


export const selectData = createSelector(
  selectTableData,
  selectSortDirection,
  selectSortKey,
  
  (tableData, sortDirection, sortKey) => {
    if (sortDirection === '') {
      return tableData;
    }

    const sortedData = [...tableData].sort((a, b) => {
      const paramA = a[sortKey];
      const paramB = b[sortKey];
      return compare(paramA, paramB, sortDirection);
    });
    return sortedData;
  }
);

// Utils
export function compare(a: any, b: any, sortDirection: string): number {
  if (a > b) {
    return sortDirection === 'asc' ? 1 : -1;
  }
  if (a < b) {
    return sortDirection === 'desc' ? 1 : -1;
  }
  return 0;
}
