import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductSize } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor(private httpClient:HttpClient) {
    this.products = [
      {
        id: 2,
        categorieId: 3,
        categorie: {
          name: "Child",
          description: "ninguna",
          products: null,
          id: 1
        },
        name: "Pantalon corto",
        description: "short futbol",
        qualification: 10,
        price: 2750,
        productSize:[
          {
          productId: 2,
          product: null,
          sizeId: 1,
          size: {
              name: "L",
              description: "10x15",
              productsSizes: [null] 
            },
          stock: 10,
          },
          {
            productId: 2,
            product: null,
            sizeId: 1,
            size: {
                name: "S",
                description: "5x10",
                productsSizes: [null] 
              },
            stock: 10,
            }
        ] 
      }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>("https://localhost:44303/heroes/getone/" + id);
  }
}