import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListComponent } from './product/list/list.component';
import { DetailComponent } from './product/detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent, CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
