import { Component } from '@angular/core';
import { Product, VISITEDPRODUCTS } from '../mocks/visited-products.mock';

@Component({
  selector: 'app-visited-product',
  templateUrl: './visited-product.component.html',
  styleUrls: ['./visited-product.component.css']
})
export class VisitedProductComponent {
  products: Product[] = VISITEDPRODUCTS;
  // faire control + espace pour créer l'import
}
