export interface Product {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;

  }

  export interface ProductTableState {
    tableData: any[];
    sortDirection: string;
    sortKey: string;
  }
  
  export interface ProductHeaderRow {
    displayName: string;
    key: string;
    hasSort: boolean;
  }