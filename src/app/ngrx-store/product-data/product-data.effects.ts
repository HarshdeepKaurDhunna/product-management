import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { loadProducts, loadProductSuccess, loadProductError} from './product-data.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductDataEffects {
  constructor(private actions: Actions, private appService: AppService) {}
  loadProducts = createEffect(() =>
  this.actions.pipe(
    ofType(loadProducts),
    switchMap(() => this.appService.getData().pipe(
      map(products => loadProductSuccess({ products })),
      catchError(() => [loadProductError()])
    ))
  )
);
}