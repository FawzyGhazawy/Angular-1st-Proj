import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  // standalone: true,
  // imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    /*this.route.snapshot.paramMap: Accesses the current route's parameter map.
routeParams.get('productId'): Retrieves the value of the route parameter named 'productId'.
Number(...): Converts the retrieved parameter value to a number. 
This assumes that the product IDs are represented as numbers.

.snapshot is a property that allows you to access the current state of 
the activated route at the moment the component is initialized.

 paramMap is a property that provides a map of the route parameters for the current route. 
 It represents the parameters extracted from the route URL as key-value pairs.

 routeParams.get('productId'): Retrieves the value of the 
 route parameter named 'productId' from the paramMap.
*/

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

    /* products.find(...): Searches through the products array to find 
    the product whose ID matches productIdFromRoute.
    product => product.id === productIdFromRoute: This is an arrow 
    function used as a callback to the find() method.
     It returns true for the product whose ID matches productIdFromRoute.*/
 
  } 
   addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
     }
}
