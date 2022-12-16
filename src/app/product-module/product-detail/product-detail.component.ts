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

  productDetail!: FormGroup;

  @Input() productDetailVal!: BehaviorSubject<Product>;
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
  *
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

  getProductListView(){
    this.viewProductList.emit(true)
  }



}
