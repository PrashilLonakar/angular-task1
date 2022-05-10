import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListComponent } from './product/list/list.component';
import { DetailComponent } from './product/detail/detail.component';


@NgModule({
  declarations: [CategoryComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
