import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : Product[]=[];

constructor(
  private http: HttpClient
) {}

getShippingPrice(){
  return this.http.get<{type: String, price: number}[]>('/assets/shipping.json');
}

addToCart(product: Product) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}

}
