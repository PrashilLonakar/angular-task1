import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //this.getAllCategories();
  }

  // getAllCategories(){
  //   this.categoryService.getCategories().subscribe((response : any) => {
  //     console.log(response);
  //   },
  //   (error: any) => {
  //     console.log(error);
  //   })
  // }
}
