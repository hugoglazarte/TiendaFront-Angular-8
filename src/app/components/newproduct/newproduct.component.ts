import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie, Size } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { SizesService } from 'src/app/services/sizes.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  form : FormGroup;
  categories : Categorie[];
  sizes: Size[];
  
  constructor(public formBuilder : FormBuilder, private categorieService : CategoryService, 
    private sizesService: SizesService) { }

  ngOnInit() {

    this.categorieService.getCategories().subscribe(response => this.categories = response);

    this.sizesService.getCategories().subscribe(response => this.sizes = response);

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      catId: [''],
      price: [''],
      size: ['']
    });
  }

}
