import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductSize, Categorie, Size } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private httpClient:HttpClient) { 
  }

  getCategories(): Observable<Array<Size>> {
    return this.httpClient.get<Array<Size>>("https://localhost:44351/Sizes/all");
  }
}