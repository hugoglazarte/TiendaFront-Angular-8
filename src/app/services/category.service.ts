import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductSize, Categorie} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { 
  }

  getCategories(): Observable<Array<Categorie>> {
    return this.httpClient.get<Array<Categorie>>("https://localhost:44351/Categories/all");
  }
}
