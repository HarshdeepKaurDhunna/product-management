import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

// NgRx
import { Store } from '@ngrx/store';
import * as ProductDataActions from '../../ngrx-store/product-data';
import * as ProductDataSelectors from '../../ngrx-store/product-data/product-data.selector';
import { Product, ProductTableState} from '../../ngrx-store/product-data/product-data.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!: Observable<any>;
  productData!: Observable<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  productDetail: BehaviorSubject<any> = new BehaviorSubject(null);
  isDetailView: boolean = false;
  
  constructor(private apiService: AppService,private store: Store<ProductTableState>) { }

  ngOnInit() {
    /**options to set the view for the datatable */
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      ordering: false,
      searching: false,
      dom: 'tp',
    };
   
    /** get data to dispatch it in state */
    this.getProductData();

    /**Dispatch data to state */
    this.store.dispatch(ProductDataActions.setData({ data: this.productList }));
    this.productData = this.store.select(ProductDataSelectors.selectData);
    
  }

  /** get data from api service throuh http client */
  getProductData(): void {
    this.apiService.getData().subscribe(data => {
      this.productList = of(data);
      this.dtTrigger.next(void 0);
    })
  }
  
  /** reset the state  */
  ngOnDestroy(): void {
    this.store.dispatch(ProductDataActions.resetDataTableStore());
  }

  /** send value to child component and view the component */
  trackById(product: Product) {
    this.productDetail.next(product);
    this.isDetailView = true;
  }

  /** hide the details component */
  updateView(){
    this.isDetailView = false;
  }

}
