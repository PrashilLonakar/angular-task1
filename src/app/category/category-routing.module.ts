import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import * as fromProduct from './product';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "all",
  },
  {
  path: "all",
  component: CategoryComponent
  },
  {
  path: "products/:id",
  component: fromProduct.components[0]
  },
  {
  path: "product/detail/:id",
  component: fromProduct.components[1]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
