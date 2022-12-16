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
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      ordering: false,
      searching: false,
      dom: 'tp',
    };
   
    this.getProductData();
    this.store.dispatch(ProductDataActions.setData({ data: this.productList }));
    this.productData = this.store.select(ProductDataSelectors.selectData);
    
  }

  getProductData(): void {
    this.apiService.getData().subscribe(data => {
      this.productList = of(data);
      this.dtTrigger.next(void 0);
    })
  }
  ngOnDestroy(): void {
    this.store.dispatch(ProductDataActions.resetDataTableStore());
  }
  trackById(product: Product) {
    
    this.productDetail.next(product);
    this.isDetailView = true;
  }

  updateView(){
    this.isDetailView = false;
  }

}
