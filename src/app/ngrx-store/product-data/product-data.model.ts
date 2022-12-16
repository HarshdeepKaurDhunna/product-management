 /* constant for table data */

export interface Product {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;

  }


 /* constant model for product data */
  export interface ProductTableState {
    tableData: any[];
    sortDirection: string;
    sortKey: string;
  }
  