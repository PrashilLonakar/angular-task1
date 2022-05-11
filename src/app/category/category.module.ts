import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListComponent } from './product/list/list.component';
import { DetailComponent } from './product/detail/detail.component';
import { FormComponent } from './product/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailComponent, CategoryComponent, FormComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
