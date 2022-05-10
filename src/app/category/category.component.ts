import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any = [];
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {

    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe((response : any) => {
      if(response.status == 200){
        this.categories =  response.body;
        console.log(response);
        console.log(response?.body);
      }
    },
    (error: any) => {
      console.log(error);
    })
  }
}
