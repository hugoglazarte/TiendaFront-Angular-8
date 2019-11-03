import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() selectedProduct:EventEmitter<number>;

  constructor() { 
    this.selectedProduct = new EventEmitter();
  }

  ngOnInit() {
  }

  seeProduct(){
    this.selectedProduct.emit(this.product.id);
  }

}
