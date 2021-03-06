import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {ProductService, ProductBase} from "../products.service";

@Component({
  selector: 'shopping-list',
  template: require('./shopping-list.component.html!text'),
  styles: [require('./shopping-list.component.css!text')]
} as Component)
export class ShoppingList implements OnInit{
  onListProducts : ProductBase[];
  allProducts: ProductBase[];
  foundProducts: ProductBase[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProducts().then(products => this.allProducts = products);
    this.onListProducts = [];
  };

  search(term: string): void {
    this.foundProducts = [];
    if(term === "") {
      return;
    }
    for(let prod of this.allProducts ) {
      if(prod._name.indexOf(term) >= 0) {
        this.foundProducts.push(prod);
      }
    }
  };

  addToLis(product: ProductBase) {
    this.onListProducts.push(product);
  }
}
