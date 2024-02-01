import { NgModule , Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId' , component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
     /* 
path: 'products/:productId': This part specifies the URL path for this route.
 In this case, it defines a route with the path 'products/:productId'.
  The :productId portion is a route parameter, indicated by the colon (:) prefix.
   It signifies that this part of the URL can vary and will be treated as
    a parameter named productId. For example, if the URL is /products/123, 
    then 123 would be passed as the value for productId.

component: ProductDetailsComponent: 
This part specifies the component that should be rendered when navigating to the
 defined URL path. In this case, it specifies that when the URL matches the pattern
  'products/:productId', Angular should render the ProductDetailsComponent.
     */
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/