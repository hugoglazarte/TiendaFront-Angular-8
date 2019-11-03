import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private  productService:ProductService, private router:Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  seeProduct(id:number){
    this.router.navigate(['/product', id]);
  }
}
