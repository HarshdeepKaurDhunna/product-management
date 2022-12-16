import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/ngrx-store/product-data/product-data.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  /*Reactive form group to set value for details*/
  productDetail!: FormGroup; 

  /**Input to get selected data from parent used behaviour subject as it holds the value */
  @Input() productDetailVal!: BehaviorSubject<Product>;
  /**Output to pass the value to parent on button click */
  @Output() viewProductList: EventEmitter<boolean> =   new EventEmitter();

  

  ngOnInit(): void {
    this.productDetail = new FormGroup({
      blendName: new FormControl(''),
      coffeeVariety: new FormControl(''),
      coffeeOrigin: new FormControl(''),
      coffeeNotes: new FormControl(''),
      coffeeIntensifier: new FormControl('')
    });

    this.setProductVal();
  }

  /*
  * method to set values to formcontrol once we subribe the input
  */
  setProductVal() {
    this.productDetailVal.subscribe(product => {
      this.productDetail.setValue({
        blendName: product.blend_name,
        coffeeVariety: product.variety,
        coffeeOrigin: product.origin,
        coffeeNotes: product.notes,
        coffeeIntensifier: product.intensifier
      });
    });
  
  }

  /** emit value to parent */
  getProductListView(){
    this.viewProductList.emit(true)
  }



}
