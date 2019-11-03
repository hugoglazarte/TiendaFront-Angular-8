import { Component, OnInit } from '@angular/core';
import { Product, ProductSize } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  productSizes : ProductSize[];

  constructor(private router:ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe((data) => {
      // this.productService.getProduct(data.id).subscribe((product) => this.product = product);
      this.product = this.productService.getProduct(data.id);
      this.productSizes = this.product.productSize;
    })
  }

}
